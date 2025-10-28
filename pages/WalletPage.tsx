import React from "react";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import TransactionsTable from "../components/TransactionsTable";
import { Page } from "../types";
import { BALANCES_DATA } from "../constants";
import { ArrowBackIcon } from "@/components/Icons";

interface WalletPageProps {
  onNavigate: (page: Page) => void;
  onViewTransaction: (transactionId: string) => void;
  isVerified?: boolean;
}

const WalletPage: React.FC<WalletPageProps> = ({
  onNavigate,
  onViewTransaction,
  isVerified = false,
}) => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen font-sans">
      <Header onNavigate={onNavigate} isVerified={isVerified} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#214D76]">
                Wallet & Transactions
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                View your balances and transaction history.
              </p>
            </div>

            <button
              onClick={() => onNavigate("dashboard")}
              className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap"
            >
              <ArrowBackIcon />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BALANCES_DATA.map((balance, index) => (
              <BalanceCard
                key={index}
                currency={balance.currency}
                balance={balance.balance}
                icon={balance.icon}
              />
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Transaction History
            </h2>
            <TransactionsTable onViewTransaction={onViewTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WalletPage;
