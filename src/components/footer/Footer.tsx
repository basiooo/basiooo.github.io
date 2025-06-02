import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center bg-base-200 shadow-lg min-h-25 flex items-center justify-center backdrop-blur-sm">
      <p className="text-lg font-bold text-base">
        Made with <FaHeart className="inline text-red-400 mx-1" /> © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
