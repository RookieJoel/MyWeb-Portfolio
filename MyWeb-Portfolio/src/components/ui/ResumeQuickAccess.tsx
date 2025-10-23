import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiEye, FiDownload, FiX } from 'react-icons/fi';

interface ResumeQuickAccessProps {
  className?: string;
}

export const ResumeQuickAccess: React.FC<ResumeQuickAccessProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/Suttanop-Chanah-Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Suttanop-Chanah-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      const link = document.createElement('a');
      link.href = '/Suttanop-Chanah-Resume.pdf';
      link.download = 'Suttanop-Chanah-Resume.pdf';
      link.click();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleView = () => {
    window.open('/Suttanop-Chanah-Resume.pdf', '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 bg-white rounded-lg shadow-lg border p-4 min-w-[200px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800 text-sm">Resume</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleView}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <FiEye className="w-4 h-4" />
                View Resume
              </button>
              
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  isDownloading
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-green-600 hover:bg-green-50'
                }`}
              >
                <FiDownload className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                {isDownloading ? 'Downloading...' : 'Download PDF'}
              </button>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isExpanded
            ? 'bg-amber-500 text-white rotate-45'
            : 'bg-white text-amber-500 hover:bg-amber-50'
        }`}
      >
        <FiFileText className="w-6 h-6" />
      </motion.button>
      
      {/* Tooltip */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
        >
          Quick Resume Access
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
        </motion.div>
      )}
    </div>
  );
};