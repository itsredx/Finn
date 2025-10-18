import React from 'react';

interface BalanceCardProps {
  currency: string;
  balance: string;
  // Fix: Update icon prop type to React.FC to align with the new data structure.
  icon: React.FC;
}

// Fix: Destructure and render the icon as a component.
const BalanceCard: React.FC<BalanceCardProps> = ({ currency, balance, icon: Icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between min-h-[217px]">
      <div className="flex items-center gap-5">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <span className="text-2xl font-semibold text-black">{currency}</span>
      </div>
      <div>
        <p className="text-4xl font-bold text-black mb-2">{balance}</p>
        <p className="text-lg text-gray-500">Available Balance</p>
      </div>
    </div>
  );
};

export default BalanceCard;