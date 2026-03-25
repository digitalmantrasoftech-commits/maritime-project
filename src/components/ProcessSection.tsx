import { FileCheck, Calendar, Package, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: FileCheck,
      title: 'Request a Quote',
      description: 'Submit your shipment details online or contact our team',
    },
    {
      icon: Calendar,
      title: 'Plan & Schedule',
      description: 'Submit your shipment details online or contact our team',
    },
    {
      icon: Package,
      title: 'Pickup & Transport',
      description: 'Submit your shipment details online or contact our team',
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Confirmation',
      description: 'Submit your shipment details online or contact our team',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-orange-500 font-semibold text-xs md:text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4 leading-tight px-4">
            How Our Logistics Process Works<br className="hidden sm:block" />Seamlessly for You
          </h2>
          <div className="w-20 md:w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 md:mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-3 md:border-4 border-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-orange-500 font-bold text-base md:text-lg">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 md:top-12 left-3/4 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-300"></div>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
