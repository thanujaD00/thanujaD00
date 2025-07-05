'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top Left Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Center Edge Glows */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-transparent blur-2xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-purple-400/10 to-transparent blur-2xl transform -translate-y-1/2"></div>
        
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-orange-400/10 to-transparent blur-3xl transform -translate-x-1/2"></div>
        
        {/* Bottom Center Glow */}
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-purple-400/10 to-transparent blur-3xl transform -translate-x-1/2"></div>
      </div>

      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
              Let's
            </span>
            <span className="text-white"> Connect</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-lg border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                <p className="text-green-300">{statusMessage}</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                <p className="text-red-300">{statusMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 rounded-lg border border-white/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">Email</h3>
                    <p className="text-white font-medium">thanujadha20@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">Phone</h3>
                    <p className="text-white font-medium">+94 750561541</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">Location</h3>
                    <p className="text-white font-medium">Kandy, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
                  LinkedIn
                </a>
                <a href="#" className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-300">
                  GitHub
                </a>
                <a href="#" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-300 hover:to-blue-400 transition-all duration-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-24 bg-white/5 p-12 rounded-lg border border-white/10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                Ready to
              </span>
              <span className="text-white"> Collaborate?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="mailto:thanujadha20@gmail.com" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                Send Email
              </a>
              <a href="tel:+94750561541" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}   