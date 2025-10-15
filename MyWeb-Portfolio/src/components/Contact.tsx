import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CometCard } from './ui/comet-card'
import emailjs from '@emailjs/browser'
import { emailJSConfig, contactEmail } from '../config/emailjs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from config file
      const { serviceID, templateID, publicKey } = emailJSConfig;

      // Validate environment variables
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // สร้างเวลาปัจจุบันสำหรับส่งไปใน email
      const currentTime = new Date().toLocaleString('th-TH', {
        timeZone: 'Asia/Bangkok',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        title: formData.title,
        subject: formData.subject || 'Job Inquiry',
        message: formData.message,
        time: currentTime,
        to_email: contactEmail,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        title: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center w-full min-h-screen bg-[#010413] scroll-mt-20 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            Ready to bring your next project to life?
          </p>
          <p className="text-base text-gray-400">
            I'm always open to discussing new opportunities, collaborations, and exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl font-semibold text-amber-300 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  placeholder="e.g. Interested in hiring you for ..."
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance Project">Freelance Project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                  placeholder="e.g. I want to hire you to make some jokes because you look funny..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform ${
                  isLoading 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 hover:scale-105'
                } text-gray-900`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-400 text-sm font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-red-400 text-sm font-medium">
                    ❌ Failed to send message. Please try again or contact me directly at {contactEmail}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-amber-300 mb-6">Let's Connect</h2>
              <div className="flex justify-center mb-8">
                <CometCard className="w-fit">
                  <div className="relative">
                    <img 
                      src="/glasses.jpeg" 
                      alt="glasses" 
                      className="w-48 h-60 rounded-2xl object-cover border border-amber-400/30 shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent rounded-2xl pointer-events-none"></div>
                  </div>
                </CometCard>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">{contactEmail}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">Bangkok, Thailand</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Response Time</h3>
                  <p className="text-gray-400">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-medium text-white mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/RookieJoel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/suttanop-chanah-5084a0319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-400 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
