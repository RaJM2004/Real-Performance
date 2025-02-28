import React from 'react';
import { Bell, Clock, Zap, Shield, BarChart, Users } from 'lucide-react';

const features = [
  {
    icon: <Bell className="h-8 w-8 text-blue-600" />,
    title: 'Real-Time Alerts',
    description: 'Get instant notifications when performance issues arise, allowing for immediate response.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Response Time Tracking',
    description: 'Monitor application response times to identify bottlenecks and optimize user experience.'
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Performance Optimization',
    description: 'Identify performance bottlenecks and optimize your application for better user experience.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Error Tracking',
    description: 'Capture and analyze errors in real-time to quickly resolve issues before they impact users.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    title: 'Custom Dashboards',
    description: 'Create personalized dashboards to monitor the metrics that matter most to your business.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'User Experience Monitoring',
    description: 'Track user interactions and experience to ensure optimal application performance.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Monitoring Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform integrates with industry-leading tools to provide comprehensive performance monitoring capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;