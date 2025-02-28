import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">PerformanceIQ</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#comparison" className="text-gray-700 hover:text-blue-600 transition-colors">Comparison</a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          </div>
          
          <div className="hidden md:flex">
            <a href="#features" className="btn btn-primary">Get Started</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#comparison" className="block text-gray-700 hover:text-blue-600 transition-colors">Comparison</a>
            <a href="#benefits" className="block text-gray-700 hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#features" className="btn btn-primary w-full mt-4">Get Started</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;