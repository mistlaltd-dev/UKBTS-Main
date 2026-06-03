import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  CheckCircle,
  Download,
  Gauge,
  RefreshCw,
  Upload,
  Wifi,
  Zap,
} from 'lucide-react';
import SEO from '../components/SEO';

type Phase = 'idle' | 'ping' | 'download' | 'upload' | 'done' | 'error';

interface Results {
  ping: number | null;
  jitter: number | null;
  download: number | null;
  upload: number | null;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/speed-test`;

const DOWNLOAD_BYTES = 25 * 1024 * 1024;
const UPLOAD_BYTES = 8 * 1024 * 1024;
const PING_SAMPLES = 6;

const GAUGE_MAX_MBPS = 1000;

function formatSpeed(mbps: number | null): string {
  if (mbps === null) return '—';
  if (mbps < 10) return mbps.toFixed(2);
  if (mbps < 100) return mbps.toFixed(1);
  return Math.round(mbps).toString();
}

function gaugeAngle(mbps: number): number {
  if (mbps <= 0) return 0;
  const log = Math.log10(Math.max(1, mbps));
  const max = Math.log10(GAUGE_MAX_MBPS);
  return Math.min(1, log / max) * 270;
}

function authHeaders(extra: Record<string, string> = {}): Record<string, string> {
  return {
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    apikey: SUPABASE_ANON_KEY,
    ...extra,
  };
}

export default function SpeedTest() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [liveSpeed, setLiveSpeed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<Results>({
    ping: null,
    jitter: null,
    download: null,
    upload: null,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  async function measurePing(): Promise<{ ping: number; jitter: number }> {
    const samples: number[] = [];
    for (let i = 0; i < PING_SAMPLES; i++) {
      const start = performance.now();
      const res = await fetch(`${FUNCTION_URL}?action=ping&n=${i}-${Date.now()}`, {
        method: 'GET',
        headers: authHeaders(),
        cache: 'no-store',
      });
      await res.json();
      const rtt = performance.now() - start;
      if (i > 0) samples.push(rtt);
    }
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const variance = samples.reduce((a, b) => a + (b - avg) ** 2, 0) / samples.length;
    return { ping: avg, jitter: Math.sqrt(variance) };
  }

  async function measureDownload(): Promise<number> {
    const url = `${FUNCTION_URL}?action=download&bytes=${DOWNLOAD_BYTES}&n=${Date.now()}`;
    const start = performance.now();
    const res = await fetch(url, {
      method: 'GET',
      headers: authHeaders(),
      cache: 'no-store',
    });
    if (!res.ok || !res.body) throw new Error('Download failed');

    const reader = res.body.getReader();
    let received = 0;
    let lastTick = start;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        received += value.byteLength;
        const now = performance.now();
        if (now - lastTick > 100) {
          const elapsedSec = (now - start) / 1000;
          const mbps = (received * 8) / 1_000_000 / elapsedSec;
          setLiveSpeed(mbps);
          setProgress(Math.min(1, received / DOWNLOAD_BYTES));
          lastTick = now;
        }
      }
    }

    const elapsedSec = (performance.now() - start) / 1000;
    return (received * 8) / 1_000_000 / elapsedSec;
  }

  async function measureUpload(): Promise<number> {
    const payload = new Uint8Array(UPLOAD_BYTES);
    crypto.getRandomValues(payload.subarray(0, Math.min(UPLOAD_BYTES, 65536)));

    const url = `${FUNCTION_URL}?action=upload&n=${Date.now()}`;
    const start = performance.now();

    const tickInterval = window.setInterval(() => {
      const elapsed = (performance.now() - start) / 1000;
      const estimatedBytes = Math.min(UPLOAD_BYTES, UPLOAD_BYTES * Math.min(1, elapsed / 5));
      const mbps = (estimatedBytes * 8) / 1_000_000 / Math.max(0.1, elapsed);
      setLiveSpeed(mbps);
      setProgress(Math.min(0.95, elapsed / 8));
    }, 120);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/octet-stream' }),
        body: payload,
      });
      if (!res.ok) throw new Error('Upload failed');
      await res.json();
    } finally {
      window.clearInterval(tickInterval);
    }

    const elapsedSec = (performance.now() - start) / 1000;
    setProgress(1);
    return (UPLOAD_BYTES * 8) / 1_000_000 / elapsedSec;
  }

  async function runTest() {
    cancelledRef.current = false;
    setErrorMessage(null);
    setResults({ ping: null, jitter: null, download: null, upload: null });
    setLiveSpeed(0);
    setProgress(0);

    try {
      setPhase('ping');
      const pingResult = await measurePing();
      if (cancelledRef.current) return;
      setResults((r) => ({ ...r, ping: pingResult.ping, jitter: pingResult.jitter }));

      setPhase('download');
      setLiveSpeed(0);
      setProgress(0);
      const downloadSpeed = await measureDownload();
      if (cancelledRef.current) return;
      setResults((r) => ({ ...r, download: downloadSpeed }));
      setLiveSpeed(downloadSpeed);

      setPhase('upload');
      setLiveSpeed(0);
      setProgress(0);
      const uploadSpeed = await measureUpload();
      if (cancelledRef.current) return;
      setResults((r) => ({ ...r, upload: uploadSpeed }));
      setLiveSpeed(uploadSpeed);

      setPhase('done');
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong while running the speed test.'
      );
      setPhase('error');
    }
  }

  const isRunning = phase === 'ping' || phase === 'download' || phase === 'upload';
  const phaseLabel: Record<Phase, string> = {
    idle: 'Ready to test',
    ping: 'Measuring latency',
    download: 'Testing download',
    upload: 'Testing upload',
    done: 'Test complete',
    error: 'Test failed',
  };

  const displaySpeed = phase === 'done' ? results.download ?? 0 : liveSpeed;
  const angle = gaugeAngle(displaySpeed);

  return (
    <div>
      <SEO
        title="Broadband Speed Test | Check Your Internet Speed | UKBTS"
        description="Free broadband speed test from UKBTS. Measure your download speed, upload speed, ping and jitter in seconds. Hosted on UK infrastructure for accurate results."
        keywords="broadband speed test, internet speed test UK, business broadband test, download speed, upload speed, ping test, jitter test"
        canonicalUrl="/speed-test"
      />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-medium">Broadband Diagnostics</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Free Broadband Speed Test
            </h1>
            <p className="text-xl text-gray-300">
              Measure your real download, upload, ping and jitter against UKBTS infrastructure.
              No tracking, no sign-up, no stored history — just accurate results in seconds.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <SpeedGauge
              speedMbps={displaySpeed}
              angle={angle}
              phase={phase}
              progress={progress}
              phaseLabel={phaseLabel[phase]}
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              <ResultCard
                icon={Activity}
                label="Ping"
                value={results.ping !== null ? `${results.ping.toFixed(0)} ms` : '—'}
                active={phase === 'ping'}
              />
              <ResultCard
                icon={Wifi}
                label="Jitter"
                value={results.jitter !== null ? `${results.jitter.toFixed(1)} ms` : '—'}
                active={phase === 'ping'}
              />
              <ResultCard
                icon={Download}
                label="Download"
                value={results.download !== null ? `${formatSpeed(results.download)} Mbps` : '—'}
                active={phase === 'download'}
              />
              <ResultCard
                icon={Upload}
                label="Upload"
                value={results.upload !== null ? `${formatSpeed(results.upload)} Mbps` : '—'}
                active={phase === 'upload'}
              />
            </div>

            {errorMessage && (
              <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-200 text-sm">
                {errorMessage}
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={runTest}
                disabled={isRunning}
                className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/40 transition-all inline-flex items-center justify-center gap-2"
                aria-label={phase === 'idle' ? 'Start speed test' : 'Run speed test again'}
              >
                {isRunning ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    Testing…
                  </>
                ) : phase === 'done' ? (
                  <>
                    <RefreshCw size={20} />
                    Run Again
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Start Speed Test
                  </>
                )}
              </button>

              {phase === 'done' && (
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  Get a Faster Quote <ArrowRight size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What These Numbers Mean
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding your results helps you decide whether your current broadband is up to the
              demands of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Explainer
              icon={Download}
              title="Download Speed"
              body="How quickly data reaches you. Important for cloud apps, video calls and downloading files."
            />
            <Explainer
              icon={Upload}
              title="Upload Speed"
              body="How quickly you can send data out. Critical for VoIP, video conferencing, hosting and backups."
            />
            <Explainer
              icon={Activity}
              title="Ping (Latency)"
              body="The round-trip time between you and our server. Lower is better — under 30ms feels instant."
            />
            <Explainer
              icon={Gauge}
              title="Jitter"
              body="The variation in ping. High jitter causes choppy calls and laggy video. Aim for under 10ms."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How Our Speed Test Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Step
                number="1"
                title="Latency"
                body="We send a series of small requests to our UK servers and measure the round-trip time, then calculate the variation to give you jitter."
              />
              <Step
                number="2"
                title="Download"
                body="Your browser pulls a 25MB stream from our infrastructure. We track real-time throughput as it arrives."
              />
              <Step
                number="3"
                title="Upload"
                body="Your browser pushes an 8MB payload back to our servers. We measure how quickly your line can send data outbound."
              />
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                <span>Runs entirely on UKBTS infrastructure — no third-party trackers</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                <span>Anonymous and never stored — close the tab and the result is gone</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                <span>Best results on a wired connection with no other heavy traffic</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                <span>Run several tests at different times for the most accurate picture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wifi className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Slower Than You Expected?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We help businesses across Somerset, Dorset and the wider UK upgrade to FTTP, leased lines
            and dedicated connectivity. Get a no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/broadband"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 inline-flex items-center justify-center gap-2"
            >
              Explore Broadband Options <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg transition-all font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SpeedGaugeProps {
  speedMbps: number;
  angle: number;
  phase: Phase;
  progress: number;
  phaseLabel: string;
}

function SpeedGauge({ speedMbps, angle, phase, progress, phaseLabel }: SpeedGaugeProps) {
  const size = 280;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const startAngle = 135;
  const sweep = 270;

  const polarToCartesian = (deg: number, r: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  const describeArc = (startDeg: number, endDeg: number, r: number) => {
    const start = polarToCartesian(endDeg, r);
    const end = polarToCartesian(startDeg, r);
    const largeArc = endDeg - startDeg <= 180 ? '0' : '1';
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
  };

  const trackPath = describeArc(startAngle, startAngle + sweep, radius);
  const valuePath = describeArc(startAngle, startAngle + Math.max(0.1, angle), radius);

  const tickValues = [1, 10, 50, 100, 250, 500, 1000];

  return (
    <div className="flex flex-col items-center" role="status" aria-live="polite">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path
            d={trackPath}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={valuePath}
            stroke="url(#speedGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            style={{ transition: 'd 0.3s ease-out' }}
          />
          {tickValues.map((tick) => {
            const tickAngle = startAngle + gaugeAngle(tick);
            const outer = polarToCartesian(tickAngle, radius - strokeWidth / 2 - 6);
            const inner = polarToCartesian(tickAngle, radius - strokeWidth / 2 - 14);
            const labelPos = polarToCartesian(tickAngle, radius - strokeWidth / 2 - 28);
            return (
              <g key={tick}>
                <line
                  x1={inner.x}
                  y1={inner.y}
                  x2={outer.x}
                  y2={outer.y}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  fill="rgba(255,255,255,0.5)"
                  fontSize="10"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {tick}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-cyan-400 text-xs uppercase tracking-widest font-medium mb-1">
            {phase === 'idle' ? 'Mbps' : phase === 'upload' ? 'Upload Mbps' : phase === 'ping' ? 'Latency' : 'Download Mbps'}
          </div>
          <div className="text-white text-6xl font-bold tabular-nums">
            {phase === 'ping' ? '...' : formatSpeed(speedMbps)}
          </div>
          <div className="text-gray-400 text-sm mt-2">{phaseLabel}</div>
        </div>
      </div>

      {(phase === 'download' || phase === 'upload') && (
        <div className="w-full max-w-md mt-6">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface ResultCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  active: boolean;
}

function ResultCard({ icon: Icon, label, value, active }: ResultCardProps) {
  return (
    <div
      className={`rounded-xl p-4 border transition-all ${
        active
          ? 'bg-cyan-500/10 border-cyan-500/40'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide font-medium mb-2">
        <Icon size={14} className={active ? 'text-cyan-400' : ''} />
        <span className={active ? 'text-cyan-400' : ''}>{label}</span>
      </div>
      <div className="text-white text-2xl font-bold tabular-nums">{value}</div>
    </div>
  );
}

interface ExplainerProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}

function Explainer({ icon: Icon, title, body }: ExplainerProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-white" size={22} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  body: string;
}

function Step({ number, title, body }: StepProps) {
  return (
    <div>
      <div className="text-cyan-600 text-5xl font-bold mb-3">{number}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}
