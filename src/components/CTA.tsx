import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Optimize Your Application Performance?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Start monitoring your applications in real-time and deliver exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#features" className="btn bg-white text-blue-700 hover:bg-blue-50 flex items-center justify-center mx-auto sm:mx-0">
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#testimonials" className="btn bg-transparent border-2 border-white text-white hover:bg-blue-700 flex items-center justify-center mx-auto sm:mx-0">
            Schedule Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;