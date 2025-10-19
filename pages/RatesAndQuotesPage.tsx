import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';
import { Page, QuoteStatus } from '../types';
import { ArrowBackIcon, TrendUpIcon, RefreshIcon } from '../components/Icons';

interface RatesAndQuotesPageProps {
  onNavigate: (page: Page) => void;
}

const quoteHistoryData = [
  {
    id: 1,
    date: '2023-10-26',
    pair: 'USDC/NGN',
    amount: '1,000.00 USDC',
    rate: '1,250.00',
    expiry: '2023-10-27',
    status: QuoteStatus.Active,
  },
  {
    id: 2,
    date: '2023-10-25',
    pair: 'USDC/NGN',
    amount: '500.00 USDC',
    rate: '1,245.50',
    expiry: '2023-10-26',
    status: QuoteStatus.Expired,
  },
  {
    id: 3,
    date: '2023-10-25',
    pair: 'USDC/NGN',
    amount: '2,500.00 USDC',
    rate: '1,240.00',
    expiry: '2023-10-25',
    status: QuoteStatus.Expired,
  },
];

const RatesAndQuotesPage: React.FC<RatesAndQuotesPageProps> = ({ onNavigate }) => {
    const [timer, setTimer] = useState(59);

    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    const formattedTimer = `00:${timer.toString().padStart(2, '0')}`;

    return (
        <div className="bg-[#F6F7F8] min-h-screen font-inter">
            <Header onNavigate={onNavigate} />
            <main className="p-8 lg:p-16">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-5xl font-extrabold text-[#214D76]">Rates &amp; Quotes</h1>
                            <p className="text-xl text-[#637188] mt-2">View live FX rates and lock quotes for your payouts.</p>
                        </div>
                        <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap">
                            <ArrowBackIcon />
                            <span>Back to Dashboard</span>
                        </button>
                    </div>

                    {/* Live Rate Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex justify-between items-end">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-semibold text-black">USDC to NGN</h2>
                                <TrendUpIcon />
                            </div>
                            <p className="text-6xl font-bold text-[#214D76]">1,250.00 NGN</p>
                            <div>
                                <p className="text-xl text-gray-500">Last updated: 10:45 AM</p>
                                <p className="text-xl text-gray-800">New quotes valid for <span className="font-bold text-[#214D76]">{formattedTimer}</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-lg font-semibold text-[#214D76] bg-white border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-100 transition-colors shadow-sm">
                                <RefreshIcon />
                                Refresh
                            </button>
                            <button 
                                onClick={() => onNavigate('create-quote')}
                                className="text-lg font-semibold text-white bg-[#214D76] rounded-lg px-8 py-3 hover:bg-opacity-90 transition-colors shadow-md"
                            >
                                Create Quote
                            </button>
                        </div>
                    </div>

                    {/* Quote History Table */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-black">Quote History</h2>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[1000px]">
                                    <thead className="bg-white">
                                        <tr className="border-b border-gray-300">
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Date</th>
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Pair</th>
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Amount</th>
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Rate</th>
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Expiry</th>
                                            <th className="px-6 py-5 text-left text-lg font-semibold text-black">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quoteHistoryData.map((item) => (
                                            <tr key={item.id} className="border-b border-gray-200 last:border-b-0">
                                                <td className="px-6 py-5 text-lg text-black font-medium">{item.date}</td>
                                                <td className="px-6 py-5 text-lg text-black font-medium">{item.pair}</td>
                                                <td className="px-6 py-5 text-lg text-black font-medium">{item.amount}</td>
                                                <td className="px-6 py-5 text-lg text-black font-medium">{item.rate}</td>
                                                <td className="px-6 py-5 text-lg text-black font-medium">{item.expiry}</td>
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

export default RatesAndQuotesPage;
