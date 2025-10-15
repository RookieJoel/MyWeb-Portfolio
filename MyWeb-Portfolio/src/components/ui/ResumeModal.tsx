import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiMaximize2 } from 'react-icons/fi';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenFullscreen = () => {
    window.open('/Suttanop_Chanah_Resume.pdf', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 font-medium text-gray-700">Suttanop_Chanah_Resume.pdf</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={onDownload}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors group"
                  title="Download Resume"
                >
                  <FiDownload className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                </button>
                
                <button
                  onClick={handleOpenFullscreen}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors group"
                  title="Open in New Tab"
                >
                  <FiMaximize2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </button>
                
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors group"
                  title="Close"
                >
                  <FiX className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="relative bg-gray-100 flex items-center justify-center min-h-[500px]">
              <iframe
                src="/Suttanop_Chanah_Resume.pdf"
                className="w-full h-[70vh] border-0"
                title="Resume Preview"
              />
              
              {/* Fallback for browsers that don't support PDF viewing */}
              <div className="absolute inset-0 bg-gray-100 hidden flex-col items-center justify-center text-gray-600">
                <FiExternalLink className="w-16 h-16 mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">PDF Preview Not Available</h3>
                <p className="text-center mb-4 max-w-md">
                  Your browser doesn't support PDF preview. Please download or open in a new tab to view the resume.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={onDownload}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
                  >
                    <FiDownload className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={handleOpenFullscreen}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Open in New Tab
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
              <div className="text-sm text-gray-600">
                📄 Suttanop Chanah - Computer Engineering Student @Chulalongkorn University
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onDownload}
                  className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 flex items-center gap-2"
                >
                  <FiDownload className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};