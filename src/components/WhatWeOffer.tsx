import { Globe, Map, Share2 } from 'lucide-react';

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: Globe,
      title: 'Regional Distribution',
      description: 'Reliable road transport solutions across cities and industrial zones',
    },
    {
      icon: Map,
      title: 'Area Coverage',
      description: 'Reliable road transport solutions across cities and industrial zones',
    },
    {
      icon: Share2,
      title: 'Regional Spread',
      description: 'Reliable road transport solutions across cities and industrial zones',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Our Service Portfolio</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At SwitMaen Logistics, our Road Freight Transportation Service ensures safe, efficient, and cost-effective delivery of goods across local, regional, and national routes. With a large fleet of GPS-enabled vehicles, professional drivers, and optimized routes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <offering.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-orange-500 rounded-2xl mx-auto opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 text-center group-hover:text-orange-600 transition-colors">
                {offering.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
