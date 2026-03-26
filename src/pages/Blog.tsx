import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Features of Modern Port Security Systems',
      excerpt: 'Discover the critical components that make up a comprehensive port security infrastructure in today\'s digital age.',
      image: 'https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Security',
      author: 'Mantra Softech Team',
      date: 'March 10, 2026',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How ANPR Technology is Revolutionizing Port Access Control',
      excerpt: 'Learn how Automatic Number Plate Recognition is transforming vehicle tracking and access management at ports worldwide.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      author: 'Mantra Softech Team',
      date: 'March 5, 2026',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Understanding ISPS Code Compliance for Port Security',
      excerpt: 'A comprehensive guide to meeting International Ship and Port Facility Security Code requirements.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Compliance',
      author: 'Mantra Softech Team',
      date: 'February 28, 2026',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'The Role of AI in Modern CCTV Surveillance Systems',
      excerpt: 'Explore how artificial intelligence is enhancing security monitoring and threat detection capabilities.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      author: 'Mantra Softech Team',
      date: 'February 20, 2026',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Best Practices for Implementing RFID Access Control',
      excerpt: 'Expert tips on deploying RFID-based access control systems for maximum security and efficiency.',
      image: 'https://images.pexels.com/photos/2599538/pexels-photo-2599538.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Implementation',
      author: 'Mantra Softech Team',
      date: 'February 15, 2026',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Integrating Multiple Security Systems: A Complete Guide',
      excerpt: 'Learn how to seamlessly integrate ANPR, CCTV, access control, and other security systems for optimal protection.',
      image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Integration',
      author: 'Mantra Softech Team',
      date: 'February 10, 2026',
      readTime: '9 min read'
    }
  ];

  return (
    <>
      <SEO
        title="Blog - Mantra Softech | Port Security Insights & Industry News"
        description="Stay updated with the latest insights on port security, access control technology, ANPR systems, and maritime safety. Expert articles from Mantra Softech."
        canonical="https://mantrasoftech.com/blog"
        ogTitle="Port Security Blog - Expert Insights from Mantra Softech"
        ogDescription="Explore articles on port security technology, ISPS compliance, ANPR systems, and access control solutions."
      />

      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Security Insights & Industry News</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Expert articles on port security, access control technology, and maritime safety best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button className="flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Want to stay updated with our latest insights?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
