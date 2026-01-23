
import HomeStructuredData from '@/components/HomeStructuredData';

export default function Home() {
  return (
    <div className="min-h-screen">

      
      {/* Intro Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
             There is a problem with the website
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Try to troubleshoot the issue by yourself. If you are unable to fix the issue, please contact the support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
