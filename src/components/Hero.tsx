import React from 'react';
import { LineChart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Real-Time Performance Monitoring
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Optimize your application performance with industry-leading tools like New Relic and Datadog. Get actionable insights and resolve issues before they impact your users.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#features" className="btn btn-primary flex items-center justify-center">
                Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#comparison" className="btn btn-secondary flex items-center justify-center">
                Compare Solutions
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard analytics" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;