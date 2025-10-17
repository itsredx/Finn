import React from 'react';
import Modal from './Modal';
import { VirtualAccount } from '../types';
import StatusBadge from './StatusBadge';
import { SendIcon } from './Icons';

interface VirtualAccountDetailsModalProps {
  account: VirtualAccount;
  onClose: () => void;
  onDelete: (accountId: string) => void;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-base text-gray-500">{label}</p>
        <p className="text-xl font-medium text-black">{value}</p>
    </div>
);

const VirtualAccountDetailsModal: React.FC<VirtualAccountDetailsModalProps> = ({ account, onClose, onDelete }) => {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this account? This action cannot be undone.')) {
      onDelete(account.id);
    }
  };

  return (
    <Modal title="Account Details" onClose={onClose}>
        <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg">
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
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-[#214D76] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-semibold">
                    <SendIcon />
                    Simulate Deposit
                </button>
            </div>
        </div>
    </Modal>
  );
};

export default VirtualAccountDetailsModal;