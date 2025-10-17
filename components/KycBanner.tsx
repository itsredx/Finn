import React from 'react';
import { WarningIconLarge } from './Icons';

interface KycBannerProps {
  onCompleteKyc: () => void;
}

const KycBanner: React.FC<KycBannerProps> = ({ onCompleteKyc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <WarningIconLarge />
        <div>
          <h3 className="text-xl font-bold text-gray-800">Action Required</h3>
          <p className="text-gray-500 text-base">
            Please complete your identity verification to unlock all features.
          </p>
        </div>
      </div>
      <button 
        onClick={onCompleteKyc}
        className="w-full md:w-auto bg-[#214D76] text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors shadow-md">
        Complete KYC
      </button>
    </div>
  );
};

export default KycBanner;