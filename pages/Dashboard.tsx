import React from 'react';
import Header from '../components/Header';
import KycBanner from '../components/KycBanner';
import StatsCard from '../components/StatsCard';
import RecentActivityTable from '../components/RecentActivityTable';
import { 
  SendIcon,
  RequestPageIcon,
  DepositIcon
} from '../components/Icons';
import { STATS_CARDS_DATA } from '../constants';
import { Page } from '../types';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen font-sans">
      <Header onNavigate={onNavigate} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <KycBanner onCompleteKyc={() => onNavigate('kyc')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATS_CARDS_DATA.map((card, index) => (
              <StatsCard
                key={index}
                title={card.title}
                amount={card.amount}
                change={card.change}
                changeType={card.changeType}
                changeText={card.changeText}
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <button className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#214D76] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-semibold">
              <SendIcon />
              Create Transfer
            </button>
            <button className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition-colors text-lg font-semibold">
              <RequestPageIcon />
              Request Payout
            </button>
            <button className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-white text-black border border-gray-400 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-lg font-semibold">
              <DepositIcon />
              Simulate Deposit
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            <RecentActivityTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
