import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = {
  categories: ['Features', 'Pricing', 'Integration', 'Scalability', 'UI/UX', 'Support'],
  tools: [
    {
      name: 'New Relic',
      logo: 'NR',
      color: 'bg-blue-600',
      ratings: [5, 3, 5, 4, 5, 4],
      features: [
        'APM (Application Performance Monitoring)',
        'Infrastructure Monitoring',
        'Browser Monitoring',
        'Mobile Monitoring',
        'Synthetic Monitoring',
        'Distributed Tracing',
        'AI-powered analytics'
      ]
    },
    {
      name: 'Datadog',
      logo: 'DD',
      color: 'bg-purple-600',
      ratings: [5, 4, 5, 5, 4, 4],
      features: [
        'Infrastructure Monitoring',
        'APM (Application Performance Monitoring)',
        'Log Management',
        'Network Monitoring',
        'Real User Monitoring',
        'Security Monitoring',
        'Serverless Monitoring'
      ]
    }
  ]
};

const Comparison = () => {
  return (
    <section id="comparison" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">New Relic vs Datadog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the leading performance monitoring solutions to find the best fit for your needs.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-3 border-b">
            <div className="p-4 font-semibold">Features</div>
            <div className="p-4 font-semibold text-center border-l">New Relic</div>
            <div className="p-4 font-semibold text-center border-l">Datadog</div>
          </div>
          
          {/* Shared Features */}
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Real-time Monitoring</div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Custom Dashboards</div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Alerting System</div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Log Management</div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">AI-powered Analytics</div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
            <div className="p-4 text-center border-l"><X className="inline h-5 w-5 text-red-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Network Performance Monitoring</div>
            <div className="p-4 text-center border-l"><X className="inline h-5 w-5 text-red-500" /></div>
            <div className="p-4 text-center border-l"><Check className="inline h-5 w-5 text-green-500" /></div>
          </div>
          
          <div className="grid grid-cols-3 border-b">
            <div className="p-4">Pricing</div>
            <div className="p-4 text-center border-l">$$</div>
            <div className="p-4 text-center border-l">$$$</div>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="p-4">Learning Curve</div>
            <div className="p-4 text-center border-l">Moderate</div>
            <div className="p-4 text-center border-l">Steep</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;