import React, { useState } from 'react';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';
import { Page, VirtualAccountStatus } from '../types';
import { ArrowBackIcon, WalletIcon, UsdcCoinIcon, CopyPayoutIcon, ArrowRightPayoutIcon } from '../components/Icons';

interface RequestPayoutPageProps {
  onNavigate: (page: Page) => void;
}

const payoutHistoryData = [
  {
    id: 1,
    date: '2023-10-26',
    token: 'USDC',
    amount: '500.00',
    bank: 'Guaranty Trust Bank',
    ngnAmount: '₦725,250.00',
    status: VirtualAccountStatus.Active,
  },
  {
    id: 2,
    date: '2023-10-25',
    token: 'USDC',
    amount: '1,200.00',
    bank: 'First Bank',
    ngnAmount: '₦1,740,600.00',
    status: VirtualAccountStatus.Pending,
  },
  {
    id: 3,
    date: '2023-10-25',
    token: 'USDC',
    amount: '750.00',
    bank: 'Zenith Bank',
    ngnAmount: '₦1,092,875.00',
    status: VirtualAccountStatus.Closed,
  },
];

const RequestPayoutPage: React.FC<RequestPayoutPageProps> = ({ onNavigate }) => {
  const idempotencyKey = "a1b2c3d4-e5f6-7890-1234-5645fgj45g";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(idempotencyKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-inter">
      <Header onNavigate={onNavigate} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl font-extrabold text-[#214D76]">Request Payout</h1>
              <p className="text-xl text-[#637188] mt-2">Convert USDC to NGN and withdraw to your bank account.</p>
            </div>
            <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap">
              <ArrowBackIcon />
              <span>Back to Dashboard</span>
            </button>
          </div>

          {/* Request Payout Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">From Wallet</label>
                <div className="flex items-center gap-4 px-5 py-4 bg-white border border-gray-300 rounded-lg">
                  <WalletIcon />
                  <span className="text-lg text-gray-800">USDC Wallet</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">Token</label>
                <div className="flex items-center gap-4 px-5 py-4 bg-white border border-gray-300 rounded-lg">
                  <UsdcCoinIcon />
                  <span className="text-lg text-gray-800">USDC (USD Coin)</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">Amount (USDC)</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="1,000.00"
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg text-lg"
                  />
                  <span className="absolute inset-y-0 right-5 flex items-center text-lg text-gray-500">USDC</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">Bank Account Name</label>
                <input
                  type="text"
                  placeholder="Enter bank account name"
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg text-lg placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">Account Number</label>
                <input
                  type="text"
                  placeholder="Enter bank account number"
                  className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg text-lg placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black">Bank Name</label>
                <select className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg text-lg text-gray-500 appearance-none bg-no-repeat bg-right pr-10"
                 style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em',
                }}>
                  <option>Select a bank</option>
                  <option>Guaranty Trust Bank</option>
                  <option>First Bank</option>
                  <option>Zenith Bank</option>
                </select>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-[#F6F7F8] rounded-lg p-6 flex justify-between items-center">
                <div>
                  <p className="text-lg text-[#637188]">Rate preview</p>
                  <p className="text-2xl font-bold text-black mt-1">1 USDC = 1,450.50 NGN</p>
                </div>
                <p className="text-2xl font-bold text-[#214D76]">Estimated Payout: ₦1,450,500.00</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 flex justify-between items-center">
                <p className="text-lg text-[#637188]">Fee Estimate</p>
                <p className="text-lg font-bold text-black">~ 1.50 USDC</p>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-xl font-medium text-black mb-2 block">Idenpotency Key</label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={idempotencyKey}
                  className="w-full pl-6 pr-12 py-4 bg-[#F6F7F8] border-none rounded-lg font-mono text-lg text-[#637188]"
                />
                <button onClick={handleCopy} className="absolute inset-y-0 right-0 flex items-center px-4 text-[#637188] hover:text-black">
                  {copied ? <span className="text-sm text-green-600">Copied!</span> : <CopyPayoutIcon />}
                </button>
              </div>
            </div>

            <button className="w-full bg-[#214D76] text-white font-semibold text-xl py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-opacity-90 transition-colors">
              <span>Request Payout</span>
              <ArrowRightPayoutIcon />
            </button>
          </div>

          {/* Payout History Table */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">Payout History</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px]">
                  <thead className="bg-white">
                    <tr className="border-b border-gray-300">
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">Date</th>
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">Token</th>
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">Amount</th>
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">Bank</th>
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">NGN Amount</th>
                      <th className="px-6 py-5 text-left text-lg font-semibold text-black">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutHistoryData.map((item) => (
                      <tr key={item.id} className="border-b border-gray-200 last:border-b-0">
                        <td className="px-6 py-5 text-lg text-black font-medium">{item.date}</td>
                        <td className="px-6 py-5 text-lg text-black font-medium">{item.token}</td>
                        <td className="px-6 py-5 text-lg text-black font-medium">{item.amount}</td>
                        <td className="px-6 py-5 text-lg text-black font-medium">{item.bank}</td>
                        <td className="px-6 py-5 text-lg text-black font-medium">{item.ngnAmount}</td>
                        <td className="px-6 py-5">
                          <StatusBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default RequestPayoutPage;
