import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Transaction, Page } from '../types';
import StatusBadge from '../components/StatusBadge';
import { ArrowBackIcon, CopyIcon, CopyOutlineIcon, DownloadIcon } from '../components/Icons';

interface TransactionDetailsPageProps {
    transaction: Transaction;
    onNavigate: (page: Page) => void;
    isVerified?: boolean;
}

const TypeBadge: React.FC<{ type: string }> = ({ type }) => (
    <div className="px-4 py-2 text-base font-semibold rounded-lg bg-blue-100 text-blue-800">
        {type}
    </div>
);

const TransactionDetailsPage: React.FC<TransactionDetailsPageProps> = ({ transaction, onNavigate, isVerified = false }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCopyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <div className="bg-[#F6F7F8] min-h-screen font-sans">
            <Header onNavigate={onNavigate} isVerified={isVerified} />
            <main className="p-8 lg:p-16">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-[#214D76]">Transaction Details</h1>
                            <p className="text-lg text-gray-500 mt-2">Track the complete journey of your transfer.</p>
                        </div>
                        <button onClick={() => onNavigate('wallet')} className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap">
                            <ArrowBackIcon />
                            Back to Transaction
                        </button>
                    </div>

                    {/* Transaction Summary Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="flex justify-between items-start">
                           <div>
                                <p className="text-lg text-gray-500 mb-1">TRANSACTION ID</p>
                                <p className="font-mono text-xl font-medium text-black">{transaction.transactionId}</p>
                           </div>
                           <div className="flex items-center gap-4">
                               <TypeBadge type={transaction.type} />
                               <StatusBadge status={transaction.status} />
                           </div>
                        </div>

                        <hr className="my-6 border-gray-200" />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4 mb-8">
                            <div>
                                <p className="text-lg text-gray-500 mb-1">Date & Time</p>
                                <p className="text-xl font-medium text-black">{transaction.fullDate}</p>
                            </div>
                            <div>
                                <p className="text-lg text-gray-500 mb-1">Token</p>
                                <p className="text-xl font-medium text-black">{transaction.token}</p>
                            </div>
                             <div>
                                <p className="text-lg text-gray-500 mb-1">Fee</p>
                                <p className="text-xl font-medium text-black">{transaction.fee}</p>
                            </div>
                             <div>
                                <p className="text-lg text-gray-500 mb-1">Reference</p>
                                <p className="text-xl font-medium text-black">{transaction.reference}</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-gray-500 mb-1">Total Amount</p>
                            <p className="text-5xl font-bold text-black">{transaction.totalAmount}</p>
                        </div>
                    </div>

                    {/* Transfer Participants Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-black mb-6 pb-6 border-b border-gray-200">Transfer Participants</h3>
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Sender */}
                            <div className="flex-1 space-y-4">
                                <h4 className="text-xl font-bold text-black">Sender</h4>
                                <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Wallet ID</span>
                                    <span className="text-lg font-medium text-black font-mono">{transaction.sender.walletId}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Business Name</span>
                                    <span className="text-lg font-medium text-black">{transaction.sender.businessName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Account Name</span>
                                    <span className="text-lg font-medium text-black">{transaction.sender.accountName}</span>
                                </div>
                            </div>

                            <div className="border-l border-gray-200 mx-4 hidden md:block"></div>

                            {/* Receiver */}
                             <div className="flex-1 space-y-4">
                                <h4 className="text-xl font-bold text-black">Receiver</h4>
                                <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Wallet ID</span>
                                    <span className="text-lg font-medium text-black font-mono">{transaction.receiver.walletId}</span>
                                </div>
                                 <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Business Name</span>
                                    <span className="text-lg font-medium text-black">{transaction.receiver.businessName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-lg text-gray-500">Account Name</span>
                                    <span className="text-lg font-medium text-black">{transaction.receiver.accountName}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blockchain Details Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-black">Blockchain Details</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-gray-500">Hedera Tx Hash</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-medium text-black font-mono">{transaction.blockchainDetails.txHash}</span>
                                    <button onClick={() => handleCopyToClipboard(transaction.blockchainDetails.txHash)} title="Copy hash" className="text-gray-600 hover:text-black">
                                        <CopyIcon />
                                    </button>
                                </div>
                            </div>
                             <div className="flex justify-between items-center">
                                <span className="text-lg text-gray-500">Consensus Sequence</span>
                                <span className="text-lg font-medium text-black">{transaction.blockchainDetails.consensusSequence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-gray-500">Confirmed At</span>
                                <span className="text-lg font-medium text-black">{transaction.blockchainDetails.confirmedAt}</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                            <button className="inline-flex items-center gap-3 text-xl font-bold text-[#214D76] hover:underline">
                                <DownloadIcon />
                                Download Proof
                            </button>
                        </div>
                         {copied && <div className="fixed bottom-10 right-10 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">Copied to clipboard!</div>}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TransactionDetailsPage;