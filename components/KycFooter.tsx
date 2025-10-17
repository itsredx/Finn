import React from 'react';

const KycFooter: React.FC = () => {
  return (
    <footer className="bg-white shadow-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <p className="text-base text-gray-600">
            Need help? Contact us at <a href="mailto:support@fintech.com" className="font-semibold text-[#214D76] hover:underline">support@fintech.com</a> or call <a href="tel:+1234567890" className="font-semibold text-[#214D76] hover:underline">+1 (234) 567 890</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default KycFooter;
