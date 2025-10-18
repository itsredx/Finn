import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Page } from '../types';
import { SendIcon, ArrowBackIcon, DropdownArrowIcon, CopyIcon } from '../components/Icons';
import { BALANCES_DATA } from '../constants';

interface CreateTransferPageProps {
  onNavigate: (page: Page) => void;
}

const CreateTransferPage: React.FC<CreateTransferPageProps> = ({ onNavigate }) => {
  const [fromWallet, setFromWallet] = useState<string>(BALANCES_DATA[0]?.walletId || '');
  const [toWallet, setToWallet] = useState('');
  const [token, setToken] = useState('USDC');
  const [amount, setAmount] = useState<number | string>('');
  const [idempotencyKey, setIdempotencyKey] = useState('');
  const [isMetadataVisible, setIsMetadataVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIdempotencyKey(crypto.randomUUID());
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(idempotencyKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const fee = 0.50;
  const totalAmount = (typeof amount === 'number' ? amount : 0) + fee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Transfer submitted!');
  };

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-sans">
      <Header onNavigate={onNavigate} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-bold text-[#214D76]">Create Transfer</h1>
                <p className="text-lg text-gray-500 mt-2">Securely send digital assets between wallets.</p>
            </div>
            <button onClick={() => onNavigate('dashboard')} className="text-lg text-gray-500 hover:text-gray-800 flex items-center gap-3">
                <ArrowBackIcon />
                Back to Dashboard
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <form className="space-y-6" id="transfer-form" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-black mb-4">Transfer Details</h2>

                {/* From Wallet */}
                <div>
                  <label className="text-xl font-medium text-black mb-2 block">From Wallet</label>
                  <div className="relative">
                    <select
                      value={fromWallet}
                      onChange={(e) => setFromWallet(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] appearance-none text-black"
                    >
                      {BALANCES_DATA.map((wallet) => (
                        <option key={wallet.walletId} value={wallet.walletId}>{wallet.currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#214D76]">
                        <DropdownArrowIcon />
                    </div>
                  </div>
                </div>

                {/* To Wallet */}
                <div>
                  <label className="text-xl font-medium text-black mb-2 block">To Wallet</label>
                   <div className="relative">
                    <input
                      type="text"
                      value={toWallet}
                      onChange={(e) => setToWallet(e.target.value)}
                      placeholder="Enter or select wallet address"
                      className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] text-black"
                    />
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#214D76]">
                        <DropdownArrowIcon />
                    </div>
                  </div>
                </div>

                {/* Token Wallet */}
                 <div>
                  <label className="text-xl font-medium text-black mb-2 block">Token Wallet</label>
                  <div className="relative">
                    <select
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] appearance-none text-black"
                    >
                      <option>USDC</option>
                      <option>EURC</option>
                       <option>HBAR</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#214D76]">
                        <DropdownArrowIcon />
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="text-xl font-medium text-black mb-2 block">Amount</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value ? parseFloat(e.target.value) : '')}
                      placeholder="0.00"
                      className="w-full pl-4 pr-16 py-4 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] text-black"
                      step="0.01"
                      min="0"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600">{token}</span>
                  </div>
                </div>

                {/* Metadata */}
                <div>
                    <button type="button" onClick={() => setIsMetadataVisible(!isMetadataVisible)} className="flex items-center gap-2 text-[#214D76] font-medium text-lg">
                        Metadata (optional)
                        <div className={`transition-transform duration-200 ${isMetadataVisible ? 'rotate-180' : ''}`}>
                            <DropdownArrowIcon />
                        </div>
                    </button>
                    {isMetadataVisible && (
                        <div className="mt-4 space-y-4">
                             <input
                                type="text"
                                placeholder="Reference or note"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] text-black"
                            />
                        </div>
                    )}
                </div>

              </form>
            </div>

            {/* Right Column: Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-black mb-6">Summary</h2>
                    <div className="space-y-4 text-lg">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Fee Estimate</span>
                            <span className="font-medium text-black">{fee.toFixed(2)} {token}</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-gray-500">Total Amount</span>
                            <span className="font-medium text-black">{totalAmount.toFixed(2)} {token}</span>
                        </div>
                    </div>

                    <hr className="my-8 border-gray-200" />
                    
                     <div>
                        <label className="text-lg font-medium text-gray-500 mb-2 block">X-Idempotency-Key</label>
                         <div className="relative">
                            <input
                                type="text"
                                value={idempotencyKey}
                                readOnly
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 font-mono break-words"
                            />
                             <button
                                type="button"
                                onClick={handleCopyToClipboard}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-800"
                                aria-label="Copy idempotency key"
                            >
                                {copied ? <span className="text-sm text-green-600">Copied!</span> : <CopyIcon />}
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    form="transfer-form"
                    className="w-full mt-8 flex items-center justify-center gap-3 px-6 py-4 bg-[#214D76] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-semibold"
                >
                    <SendIcon />
                    Create Transfer
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateTransferPage;