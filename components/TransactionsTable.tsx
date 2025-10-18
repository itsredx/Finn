import React from 'react';
import { ALL_TRANSACTIONS_DATA } from '../constants';
import { Transaction, TransactionType } from '../types';
import StatusBadge from './StatusBadge';
import { ArrowUpIcon, ArrowDownIcon } from './Icons';

interface TransactionsTableProps {
  onViewTransaction: (transactionId: string) => void;
}

const TransactionRow: React.FC<{ transaction: Transaction; onViewTransaction: (transactionId: string) => void; }> = ({ transaction, onViewTransaction }) => {
  const isOutbound = transaction.amount < 0 || transaction.type === TransactionType.Payout || transaction.type === TransactionType.Transfer;
  const amountColor = transaction.amount > 0 ? 'text-green-600' : 'text-gray-800';

  return (
    <tr className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-200`}>
            {isOutbound ? <ArrowUpIcon className="text-[#214D76]" /> : <ArrowDownIcon className="text-[#214D76]" />}
          </div>
          <div>
            <p className="font-semibold text-base text-black">{transaction.description}</p>
            <p className="text-sm text-gray-500">{transaction.details}</p>
          </div>
        </div>
      </td>
      <td className={`px-6 py-5 font-semibold text-base ${amountColor}`}>
        {transaction.amount > 0 ? `+${transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}` : transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </td>
      <td className="px-6 py-5 text-base text-gray-600">{transaction.date}</td>
      <td className="px-6 py-5">
        <StatusBadge status={transaction.status} />
      </td>
      <td className="px-6 py-5">
        <button onClick={() => onViewTransaction(transaction.id)} className="text-[#214D76] font-bold text-base hover:underline">
            View
        </button>
      </td>
    </tr>
  );
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({ onViewTransaction }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-[#EEF0F0]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Transaction</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {ALL_TRANSACTIONS_DATA.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} onViewTransaction={onViewTransaction}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
