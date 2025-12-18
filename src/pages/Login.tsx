import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Login() {
  useEffect(() => {
    const iframe = document.getElementById('cp') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = 'https://cp.voicehost.co.uk';
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <SEO
        title="Login | UKBTS Control Panel"
        description="Access your UKBTS control panel to manage your telecommunications services."
        keywords="control panel login, customer portal, VoiceHost login, manage services"
        canonicalUrl="/login"
        noIndex={true}
      />
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
