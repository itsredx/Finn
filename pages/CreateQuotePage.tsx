import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Page } from '../types';
import { ArrowBackIcon, LockIcon, ExpireIcon, ActiveBadgeIcon } from '../components/Icons';

interface CreateQuotePageProps {
  onNavigate: (page: Page) => void;
  isVerified?: boolean;
}

const CreateQuotePage: React.FC<CreateQuotePageProps> = ({ onNavigate, isVerified = false }) => {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(32);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-inter">
  <Header onNavigate={onNavigate} isVerified={isVerified} />
      
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="space-y-3">
              <h1 className="text-[32px] font-black text-[#214D76]">Create Quote</h1>
              <p className="text-[20px] font-medium text-[#637188]">
                Review the details of your locked FX quote.
              </p>
            </div>
            
            {/* Back to Transaction Button */}
            <button 
              onClick={() => onNavigate('rates-and-quotes')}
              className="flex items-center gap-4 text-[20px] font-medium text-[#637188] hover:text-[#214D76]"
            >
              <ArrowBackIcon />
              <span>Back to Transaction</span>
            </button>
          </div>

          <div className="flex gap-8 lg:gap-16">
            {/* Main Quote Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-[841px]">
              <div className="space-y-6">
                {/* Quote Details Section */}
                <div className="flex justify-between items-start">
                  <div className="space-y-5">
                    {/* Quote ID and Currency Pair */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <p className="text-[20px] font-medium text-[#637188]">Quote ID: Q-12345XYZ</p>
                        <div className="flex items-center gap-2 bg-[#D4EFDF] text-[#10B981] px-3 py-1 rounded-full text-sm font-medium">
                          <ActiveBadgeIcon />
                          Active
                        </div>
                      </div>
                      <h2 className="text-[32px] font-normal text-black font-arial">USD / EUR</h2>
                    </div>
                    
                    {/* Exchange Rate */}
                    <div className="text-[64px] font-bold text-black leading-tight">1.0812</div>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="flex gap-16">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Amount */}
                    <div className="space-y-3">
                      <p className="text-[20px] font-medium text-[#637188]">Amount</p>
                      <p className="text-[20px] font-semibold text-black">$1,000.00 USD</p>
                    </div>
                    
                    {/* Locked At */}
                    <div className="space-y-3">
                      <p className="text-[20px] font-medium text-[#637188]">Locked At</p>
                      <p className="text-[20px] font-semibold text-black">2024-05-23 10:00:00 AM UTC</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Side */}
                    <div className="space-y-3">
                      <p className="text-[20px] font-medium text-[#637188]">side</p>
                      <div className="bg-[#E3F2FD] text-[#214D76] px-4 py-2 rounded-lg text-[16px] font-medium inline-block">
                        Buy
                      </div>
                    </div>
                    
                    {/* Expire At */}
                    <div className="space-y-3">
                      <p className="text-[20px] font-medium text-[#637188]">Expire At</p>
                      <p className="text-[20px] font-semibold text-black">2024-05-23 10:05:00 AM UTC</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-[#8D8F91] my-8" />

                {/* Quote Expires Section */}
                <div className="text-center space-y-6">
                  <p className="text-[20px] font-medium text-[#637188]">Quote expires in:</p>
                  
                  <div className="flex justify-center gap-5">
                    {/* Minutes */}
                    <div className="text-center space-y-3">
                      <div className="bg-[#F6F7F8] rounded-2xl w-[85px] h-[85px] flex items-center justify-center">
                        <span className="text-[32px] font-semibold text-black">{formatTime(minutes)}</span>
                      </div>
                      <p className="text-[20px] font-medium text-[#637188]">Minutes</p>
                    </div>
                    
                    {/* Seconds */}
                    <div className="text-center space-y-3">
                      <div className="bg-[#F6F7F8] rounded-2xl w-[85px] h-[85px] flex items-center justify-center">
                        <span className="text-[32px] font-semibold text-black">{formatTime(seconds)}</span>
                      </div>
                      <p className="text-[20px] font-medium text-[#637188]">Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-[411px] space-y-8">
              {/* Quote History Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-12">
                <h3 className="text-[24px] font-bold text-black">Quote History</h3>
                
                <div className="space-y-5">
                  {/* Quote Locked */}
                  <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] bg-[#214D76] rounded-full flex items-center justify-center">
                      <LockIcon />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[20px] font-semibold text-black">Quote Locked</p>
                      <p className="text-[20px] font-medium text-[#637188]">May 23, 2024, 10:00AM</p>
                    </div>
                  </div>

                  {/* Quote Expires */}
                  <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] bg-[#637188] rounded-full flex items-center justify-center">
                      <ExpireIcon />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[20px] font-semibold text-black">Quote Expires</p>
                      <p className="text-[20px] font-medium text-[#637188]">May 23, 2024, 10:00AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-5">
                {/* Use Quote Button */}
                <button className="w-full bg-[#214D76] text-white rounded-lg py-4 text-[20px] font-semibold hover:bg-opacity-90 transition-colors shadow-lg">
                  Use Quote
                </button>

                {/* Cancel Quote Button */}
                <button className="w-full bg-white border border-gray-300 text-[#214D76] rounded-2xl py-4 text-[20px] font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Cancel Quote
                </button>
              </div>
            </div>
          </div>

          {/* Payout Preview Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-[841px]">
            <div className="space-y-5">
              <h3 className="text-[24px] font-bold text-black">Payout Preview</h3>
              
              <div className="bg-[#F6F7F8] rounded-2xl p-6 flex items-center justify-between">
                <p className="text-[20px] font-medium text-[#637188]">you will receive:</p>
                <p className="text-[32px] font-bold text-[#214D76]">€924.89</p>
              </div>
              
              <button className="w-full bg-[#214D76] text-white rounded-lg py-4 text-[20px] font-semibold hover:bg-opacity-90 transition-colors shadow-lg">
                Use This Quote for Payout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateQuotePage;