import React from 'react';
import { TrendingUp, DollarSign, Clock, Heart } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-blue-600 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Monitor Performance?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Implementing real-time performance monitoring delivers tangible benefits to your business and customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-700 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Improved User Experience</h3>
                <p className="text-blue-100">
                  Identify and fix performance issues before they impact your users, leading to higher satisfaction and retention rates.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Reduced Operational Costs</h3>
                <p className="text-blue-100">
                  Proactively identify resource bottlenecks and optimize infrastructure usage, leading to significant cost savings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Faster Issue Resolution</h3>
                <p className="text-blue-100">
                  Real-time alerts and detailed diagnostics enable your team to identify and resolve issues in minutes instead of hours.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-700 rounded-xl p-8">
            <div className="flex items-start mb-4">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Increased Reliability</h3>
                <p className="text-blue-100">
                  Continuous monitoring helps maintain high availability and reliability of your applications, building trust with your users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;