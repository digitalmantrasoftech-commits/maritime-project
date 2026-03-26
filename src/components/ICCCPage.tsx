import { Monitor, Shield, Activity, ArrowRight } from 'lucide-react';

export default function ICCCPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 text-white py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-5xl font-bold mb-6">Command Systems for Ports</h1>
          <p className="text-xl text-gray-300">
            Integrated Command Control Centre (ICCC) that unifies CCTV, VMS, access control,
            ANPR, UVSS, RFID, and operational systems into a centralized monitoring environment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">The Problem with Fragmented Port Systems</h2>
          <p className="text-gray-600 text-lg">
            Ports operate multiple independent systems, creating fragmented visibility and slower
            incident response. ICCC centralizes monitoring for stronger situational awareness.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Unified Command and Control</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Monitor className="text-orange-500 mb-3" />
              <h3 className="font-bold text-xl">Central Monitoring</h3>
              <p className="text-gray-600">One dashboard for multiple systems</p>
            </div>
            <div>
              <Activity className="text-orange-500 mb-3" />
              <h3 className="font-bold text-xl">Real-Time Alerts</h3>
              <p className="text-gray-600">Faster event correlation and response</p>
            </div>
            <div>
              <Shield className="text-orange-500 mb-3" />
              <h3 className="font-bold text-xl">ISPS Alignment</h3>
              <p className="text-gray-600">Structured security visibility and reporting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Build a Unified Port Command Layer</h2>
        <p className="mb-6 text-gray-300">
          Connect surveillance, security, and operational systems in one control environment.
        </p>
        <a href="/contact" className="bg-orange-500 px-6 py-3 rounded-lg inline-flex items-center gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}