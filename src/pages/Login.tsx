import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    const iframe = document.getElementById('cp') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://cp.voicehost.co.uk';
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <iframe
        id="cp"
        name="cp"
        src="#"
        className="w-full h-full border-0 block"
        title="Control Panel"
      />
    </div>
  );
}
