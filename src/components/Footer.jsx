import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <ArrowUp size={20} />
          </button>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-gray-300 mb-2 text-sm">
              © 2025 Om Shukla. All rights reserved <span className='text-gray-500'>(Probably?)</span>.
            </p>
            <p className="md:text-sm text-xs text-gray-400 flex items-center justify-center">
              Made with <Heart size={16} className="text-red-500 mx-1" />,Sweat and Tears using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;