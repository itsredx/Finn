import React, { useState } from 'react';
import Header from '../components/Header';
import { VirtualAccount, Page } from '../types';
import StatusBadge from '../components/StatusBadge';
import { SendIcon } from '../components/Icons';
import SimulateDepositModal from '../components/SimulateDepositModal';


interface VirtualAccountDetailsPageProps {
  account: VirtualAccount;
  onNavigate: (page: Page) => void;
  onDelete: (accountId: string) => void;
  isVerified?: boolean;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-base text-gray-500">{label}</p>
        <p className="text-xl font-medium text-black">{value}</p>
    </div>
);

const VirtualAccountDetailsPage: React.FC<VirtualAccountDetailsPageProps> = ({ account, onNavigate, onDelete, isVerified = false }) => {
  const [isSimulateDepositModalOpen, setIsSimulateDepositModalOpen] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this account? This action cannot be undone.')) {
      onDelete(account.id);
    }
  };

  return (
    <>
      <div className="bg-[#F6F7F8] min-h-screen font-sans">
    <Header onNavigate={onNavigate} isVerified={isVerified} />
        <main className="p-8 lg:p-16">
          <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex justify-between items-center">
                  <div>
                      <button onClick={() => onNavigate('virtual-accounts')} className="text-lg text-gray-500 hover:text-gray-800 mb-2 flex items-center gap-2">
                        <span aria-hidden="true">&larr;</span> Back to Accounts
                      </button>
                      <h1 className="text-4xl font-bold text-[#214D76]">Account Details</h1>
                  </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-[#214D76] mb-6">{account.accountName}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <InfoRow label="Account Holder" value={account.accountHolder} />
                            <InfoRow label="Creation Date" value={account.creationDate} />
                        </div>
                        
                        <div className="mt-6 space-y-2">
                            <p className="text-base text-gray-500">Bank Information</p>
                            <p className="text-xl font-medium text-black">Account Number: {account.accountNumber}</p>
                            <p className="text-xl font-medium text-black">Routing Number: {account.routingNumber}</p>
                            <p className="text-xl font-medium text-black">Bank Name: {account.bank}</p>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <p className="text-xl font-medium text-black">Status:</p>
                            <StatusBadge status={account.status} />
                        </div>
                    </div>
                    
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:items-center gap-4 pt-4 border-t border-gray-200">
                        <button 
                          onClick={handleDelete}
                          className="w-full sm:w-auto text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            Delete Account
                        </button>
                        <button 
                          onClick={() => setIsSimulateDepositModalOpen(true)}
                          className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-[#214D76] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-semibold">
                            <SendIcon />
                            Simulate Deposit
                        </button>
                    </div>
                </div>
              </div>
          </div>
        </main>
      </div>

      {isSimulateDepositModalOpen && (
        <SimulateDepositModal
          account={account}
          onClose={() => setIsSimulateDepositModalOpen(false)}
        />
      )}
    </>
  );
};

export default VirtualAccountDetailsPage;