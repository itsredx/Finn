import React, { useState } from 'react';
import Modal from './Modal';

interface CreateVAModalProps {
  onClose: () => void;
  onAddAccount: (account: { accountName: string; currency: 'USD' | 'EUR', purpose: 'inbound_invoices' | 'settlements' }) => void;
}

const CreateVAModal: React.FC<CreateVAModalProps> = ({ onClose, onAddAccount }) => {
  const [accountName, setAccountName] = useState('');
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');
  const [purpose, setPurpose] = useState<'inbound_invoices' | 'settlements'>('inbound_invoices');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountName.trim()) {
      setError('Account name is required.');
      return;
    }
    setError('');
    onAddAccount({ accountName, currency, purpose });
    onClose();
  };

  return (
    <Modal title="Create Virtual Account" onClose={onClose}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
            <label className="text-base font-medium text-gray-800 mb-2 block">Account Name</label>
            <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g., Stripe Payouts"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div>
            <label className="text-base font-medium text-gray-800 mb-2 block">Purpose</label>
            <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as 'inbound_invoices' | 'settlements')}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em',
                }}
            >
                <option value="inbound_invoices">Inbound Invoices</option>
                <option value="settlements">Settlements</option>
            </select>
        </div>
        <div>
            <label className="text-base font-medium text-gray-800 mb-2 block">Currency</label>
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as 'USD' | 'EUR')}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700 appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>')`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em',
                }}
            >
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
            </select>
        </div>
        
        <p className="text-sm text-gray-500">
          A new virtual account will be generated with a unique account number for the selected currency.
        </p>
        <div className="flex justify-end gap-4 pt-4">
          <button 
            type="button"
            onClick={onClose}
            className="bg-transparent text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="bg-[#214D76] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
          >
            Create Account
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateVAModal;