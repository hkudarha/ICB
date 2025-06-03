import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl  backdrop-blur-lg rounded-3xl border border-gray-700 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left side - Form */}
          <div className="p-8 lg:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-white text-4xl lg:text-5xl font-bold">
                Let's Connect
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Have a query or project in mind? Contact us—we're here to help
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Enter here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right side - 3D Graphics */}
          <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 lg:p-12 flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              {/* Purple flowing lines */}
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-20 right-20 w-24 h-24 border-2 border-purple-300 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute bottom-32 left-20 w-40 h-40 border border-purple-500 rounded-full opacity-25"></div>
              
              {/* Flowing purple lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" fill="none">
                <path
                  d="M100 100C150 150 200 50 300 100C400 150 350 250 300 300C250 350 150 300 100 350C50 400 100 450 150 500"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M50 200C100 150 200 250 250 200C300 150 350 200 400 250C450 300 400 350 350 400"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Main 3D Elements */}
            <div className="relative z-10 flex flex-col items-center space-y-8">
              {/* 3D Cube with "HC" */}
              <div className="relative">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white to-gray-200 rounded-lg shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 flex items-center justify-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800">HC</div>
                  {/* 3D Effect sides */}
                  <div className="absolute -right-2 -bottom-2 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg -z-10"></div>
                </div>
                
                {/* Floating particles around cube */}
                <div className="absolute -top-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute -top-2 -right-6 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute -bottom-6 -left-2 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"></div>
              </div>

              {/* 3D Globe */}
              <div className="relative">
                {/* Globe base */}
                <div className="w-32 h-16 lg:w-40 lg:h-20 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full shadow-lg relative overflow-hidden">
                  {/* Grid lines on globe */}
                  <div className="absolute inset-0">
                    <div className="absolute top-2 left-4 right-4 h-px bg-blue-300 opacity-60"></div>
                    <div className="absolute top-4 left-2 right-2 h-px bg-blue-300 opacity-60"></div>
                    <div className="absolute top-6 left-6 right-6 h-px bg-blue-300 opacity-60"></div>
                    <div className="absolute top-8 left-4 right-4 h-px bg-blue-300 opacity-40"></div>
                    
                    {/* Vertical lines */}
                    <div className="absolute top-0 bottom-0 left-1/4 w-px bg-blue-300 opacity-60"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-300 opacity-60"></div>
                    <div className="absolute top-0 bottom-0 left-3/4 w-px bg-blue-300 opacity-60"></div>
                  </div>
                  
                  {/* Globe glow effect */}
                  <div className="absolute -inset-2 bg-blue-400 rounded-full blur-md opacity-20 animate-pulse"></div>
                </div>

                {/* Orbit ring */}
                <div className="absolute -inset-8 border border-purple-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -inset-12 border border-purple-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Floating stars */}
              <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
              <div className="absolute top-20 right-16 w-0.5 h-0.5 bg-purple-300 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 left-8 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-32 right-12 w-0.5 h-0.5 bg-purple-200 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;