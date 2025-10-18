import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { VirtualAccount } from '../types';
import { CopyIcon } from './Icons';

interface SimulateDepositModalProps {
  account: VirtualAccount;
  onClose: () => void;
}

const SimulateDepositModal: React.FC<SimulateDepositModalProps> = ({ account, onClose }) => {
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [idempotencyKey, setIdempotencyKey] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIdempotencyKey(crypto.randomUUID());
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(idempotencyKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert('Please enter a valid positive amount.');
      return;
    }
    console.log('Simulating Deposit:', {
      accountId: account.id,
      accountName: account.accountName,
      amount: parseFloat(amount),
      reference,
      idempotencyKey,
    });
    alert(`Successfully simulated a deposit of $${parseFloat(amount).toFixed(2)} to "${account.accountName}".`);
    onClose();
  };

  return (
    <Modal title="Simulate Deposit" onClose={onClose}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-xl font-medium text-black mb-2 block">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g., 100.00"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700"
            step="0.01"
            min="0.01"
          />
        </div>
        
        <div>
          <label className="text-xl font-medium text-black mb-2 block">Reference</label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="e.g., Invoice Payment"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700"
          />
        </div>
        
        <div>
          <label className="text-xl font-medium text-black mb-2 block">X-Idempotency-Key</label>
          <div className="relative">
            <input
              type="text"
              value={idempotencyKey}
              readOnly
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 font-mono"
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
        
        <div className="pt-4">
          <button 
            type="submit"
            className="w-full bg-[#214D76] text-white font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-colors shadow-md text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SimulateDepositModal;
