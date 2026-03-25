import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { images } from "../assets/images";

export default function OurJourney() {
  const milestones = [
    {
      label: 'History',
      year: '2006',
      description: 'In 2006, Mantra Softech was founded with a clear vision: to integrate innovative technology into critical infrastructure. Starting small, we focused on providing secure, reliable solutions to clients, establishing ourselves in the early days as a trusted provider in the industry.',
    },
    {
      label: 'Achievement',
      year: '2015',
      description: 'By 2015, Mantra Softech had grown significantly, marking a major milestone in our evolution. With advanced security solutions and a focus on operational efficiency, we expanded our services, establishing a global presence and gaining recognition for our high-quality products and services.',
    },
    {
      label: 'Award Winning',
      year: '2025',
      description: 'Looking ahead to 2025, Mantra Softech is poised to be recognized as an industry leader. Our commitment to precision and passion for innovation have earned us multiple awards, further cementing our reputation as a top provider of ISPS-compliant systems and advanced security solutions worldwide.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-primary-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* <img
                  src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team packing boxes"
                  className="w-full h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                /> */}
                <img src={images.DeliveringProgressImg} alt="Team packing boxes"
                  className="w-full h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-8 left-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">4.9 /5</div>
                      <div className="text-white/70 text-sm">Based on 250+ google review</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-gray-900" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-900" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-gray-900" />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-gray-900" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">25k+</div>
                      <div className="text-white/70 text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                OUR JOURNEY
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Delivering Progress Through Passion and Precision
              </h2>

              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                At Mantra Softech, our journey started with a singular mission — to provide secure, efficient, and timely solutions. From our humble beginnings in 2006, we have evolved into a trusted global leader in delivering ISPS-compliant security and surveillance systems.
              </p>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={300 + index * 100}>
                    <div className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="px-4 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full">
                          <span className="text-sm font-semibold text-gray-700">{milestone.label}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-primary-800 group-hover:scale-110 transition-transform duration-300">
                            {milestone.year}
                          </div>
                          {index !== milestones.length - 1 && (
                            <div className="absolute left-1/2 top-full h-12 w-0.5 bg-gradient-to-b from-gray-300 to-transparent transform -translate-x-1/2 mt-4" />
                          )}
                        </div>

                        <div className="flex-1 pt-2">
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
