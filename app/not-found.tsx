"use client"
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4 py-12">
      {/* Company Header */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">DevCorp</span>
        </div>
      </div>

      <div className="max-w-6xl w-full text-center relative">
        
        {/* Animated Background Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        {/* Main Content Container */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          
          {/* Error Code with Animation */}
          <div className="relative mb-10">
            <div className="text-[200px] md:text-[300px] font-bold text-gray-100 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[200px] md:text-[300px] font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-none animate-bounce-subtle">
                404
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto animate-slide-up animation-delay-200">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, our team of developers is always here to help you navigate.
            </p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 animate-slide-up animation-delay-400">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <span className="text-blue-700 font-medium">HTTP 404 Error • Resource Not Found</span>
            </div>
          </div>

          {/* Development Insights */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Possible reasons:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="font-semibold text-gray-800 mb-2">Broken Link</h4>
                <p className="text-gray-600 text-sm">The link might be outdated or incorrect</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="text-3xl mb-3">🚧</div>
                <h4 className="font-semibold text-gray-800 mb-2">Under Development</h4>
                <p className="text-gray-600 text-sm">This feature is currently being built</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="text-3xl mb-3">📁</div>
                <h4 className="font-semibold text-gray-800 mb-2">Moved or Removed</h4>
                <p className="text-gray-600 text-sm">Content has been relocated or archived</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/25"
            >
              <span className="font-semibold">Return to Homepage</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link 
              href="/contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold">Contact Support</span>
            </Link>
          </div>

          {/* Development Services */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Development Services:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Web Development', color: 'bg-blue-100 text-blue-800' },
                { label: 'Mobile Apps', color: 'bg-purple-100 text-purple-800' },
                { label: 'UI/UX Design', color: 'bg-green-100 text-green-800' },
                { label: 'DevOps', color: 'bg-red-100 text-red-800' },
                { label: 'Cloud Solutions', color: 'bg-yellow-100 text-yellow-800' },
                { label: 'Consulting', color: 'bg-indigo-100 text-indigo-800' },
              ].map((service, index) => (
                <Link
                  key={service.label}
                  href="/services"
                  className={`px-4 py-2 rounded-lg ${service.color} border border-transparent hover:border-gray-300 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Technical Support */}
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Need Technical Assistance?</h4>
                <p className="text-gray-600 mb-4 md:mb-0">
                  Our development team is available 24/7 to help with any technical issues
                </p>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="tel:+1-234-567-8900"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-200 hover:border-blue-600 font-semibold transition-all duration-300 hover:shadow-md"
                >
                  📞 Call Support
                </Link>
                <Link 
                  href="/chat"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-md"
                >
                  💬 Live Chat
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DevCorp Solutions. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link> • 
            <Link href="/terms" className="hover:text-blue-600 transition-colors mx-2">Terms of Service</Link> • 
            <Link href="/sitemap" className="hover:text-blue-600 transition-colors">Sitemap</Link>
          </p>
        </div>

      </div>

      {/* Floating Code Elements */}
      <div className="fixed bottom-10 right-10 w-16 h-16 bg-blue-500/10 rounded-2xl rotate-45 animate-float"></div>
      <div className="fixed top-20 left-10 w-12 h-12 bg-purple-500/10 rounded-xl rotate-12 animate-float animation-delay-1500"></div>
      <div className="fixed top-1/3 right-16 w-8 h-8 bg-green-500/10 rounded-lg rotate-45 animate-float animation-delay-1000"></div>
      
      {/* Console Log Message */}
      <div className="fixed bottom-4 left-4 hidden md:block">
        <div className="bg-gray-900 text-green-400 font-mono text-sm p-3 rounded-lg border border-gray-700 max-w-xs">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          </div>
          <div>console.log('404: Page not found')</div>
          <div className="text-gray-500">// Redirecting to homepage...</div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotation, 0deg)); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;