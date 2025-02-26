import React from 'react';
import { motion } from 'framer-motion';

interface ProjectPlaceholderProps {
  index: number;
}

const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({ index }) => {
  // Array of modern gradient combinations
  const gradients = [
    'from-blue-500 to-purple-500',
    'from-teal-400 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-green-400 to-blue-500',
    'from-yellow-400 to-orange-500',
    'from-pink-500 to-rose-500',
  ];

  // Array of geometric patterns
  const patterns = [
    'M0 0h4v4H0V0zm4 4h4v4H4V4z', // Checkerboard
    'M0 0l4 4-4 4z', // Triangles
    'M0 2a2 2 0 014 0a2 2 0 01-4 0z', // Circles
    'M0 0h2v2H0V0z', // Squares
    'M1 0L2 2L1 4L0 2z', // Diamonds
    'M0 0Q1 1 0 2Q1 3 0 4', // Waves
  ];

  const gradient = gradients[index % gradients.length];
  const pattern = patterns[index % patterns.length];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      />
      
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id={`pattern-${index}`}
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <path
            d={pattern}
            fill="currentColor"
          />
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill={`url(#pattern-${index})`}
        />
      </svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPlaceholder; 