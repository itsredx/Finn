
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from './Icons';
import { ChangeType } from '../types';

interface StatsCardProps {
  title: string;
  amount: string;
  change?: string | null;
  changeType: ChangeType;
  changeText?: string | null;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, amount, change, changeType, changeText }) => {
  const isIncrease = changeType === ChangeType.Increase;
  const changeColor = isIncrease ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between h-full min-h-[190px]">
      <div>
        <p className="text-lg text-gray-500 mb-2">{title}</p>
        <p className="text-4xl font-bold text-black">{amount}</p>
      </div>
      <div className={`flex items-center gap-1 text-lg font-medium ${changeColor}`}>
        {change && (
          <>
            {isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <span>{change}</span>
          </>
        )}
        {changeText && <span>{changeText}</span>}
      </div>
    </div>
  );
};

export default StatsCard;
