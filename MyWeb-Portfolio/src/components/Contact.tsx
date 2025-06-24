import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center w-full h-screen bg-[#010413] scroll-mt-20 mb-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        Contact Me
      </h1>
      <p className="text-lg text-white mb-6">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
        <a href="mailto:jojackchanah@gmail.com" className="px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors duration-300">
          Email Me
        </a>
    </div>
    
      
  )
}
