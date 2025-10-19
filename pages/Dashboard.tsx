// FIX: Implementing the Dashboard page component.
import React from 'react';
import Header from '../components/Header';
import KycBanner from '../components/KycBanner';
import StatsCard from '../components/StatsCard';
import RecentActivityTable from '../components/RecentActivityTable';
import { Page } from '../types';
import { DASHBOARD_STATS_DATA } from '../constants';
import { SendIcon, DepositIcon, RequestPageIcon } from '../components/Icons';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  isVerified?: boolean;
}

const ActionButton: React.FC<{ icon: React.ReactNode; label: string; description: string; onClick: () => void;}> = ({ icon, label, description, onClick }) => (
    <button
        onClick={onClick}
        className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#214D76]"
    >
        <div className="bg-[#E0F2FE] p-3 rounded-full text-[#0284C7]">
            {icon}
        </div>
        <div>
            <p className="font-bold text-lg text-black">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </button>
);


const Dashboard: React.FC<DashboardProps> = ({ onNavigate, isVerified = false }) => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen font-sans">
      <Header onNavigate={onNavigate} isVerified={isVerified} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {!isVerified && <KycBanner onCompleteKyc={() => onNavigate('kyc')} />}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DASHBOARD_STATS_DATA.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                amount={stat.amount}
                change={stat.change}
                changeType={stat.changeType}
                changeText={stat.changeText}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ActionButton 
                icon={<SendIcon />} 
                label="Create Transfer" 
                description="Send funds to another wallet"
                onClick={() => onNavigate('create-transfer')} 
              />
              <ActionButton 
                icon={<DepositIcon />} 
                label="Deposit Funds" 
                description="Add money to your account"
                onClick={() => alert('Deposit Funds feature coming soon!')} 
              />
              <ActionButton 
                icon={<RequestPageIcon />} 
                label="Request Payout" 
                description="Withdraw funds to your bank"
                onClick={() => onNavigate('request-payout')} 
              />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            <RecentActivityTable />
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('wallet')}
              className="text-[#214D76] font-bold text-lg hover:underline"
            >
              View all transactions
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;