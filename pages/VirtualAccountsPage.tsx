import React, { useState } from "react";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { Page, VirtualAccount } from "../types";
import { PlusIcon, BankAccountIcon, ArrowBackIcon } from "../components/Icons";
import CreateVAModal from "../components/CreateVAModal";

interface VirtualAccountsPageProps {
  onNavigate: (page: Page) => void;
  accounts: VirtualAccount[];
  onAddAccount: (account: {
    accountName: string;
    currency: "USD" | "EUR";
    purpose: "inbound_invoices" | "settlements";
  }) => void;
  onDeleteAccount: (accountId: string) => void;
  onViewAccountDetails: (accountId: string) => void;
  isVerified?: boolean;
}

const EmptyState: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => (
  <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
    <BankAccountIcon />
    <h2 className="mt-6 text-2xl font-bold text-gray-800">
      No virtual accounts yet.
    </h2>
    <p className="mt-2 text-base text-gray-500">
      Create your first account to get started.
    </p>
    <button
      onClick={onOpenModal}
      className="mt-8 flex items-center gap-2 bg-[#214D76] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
    >
      <PlusIcon />
      Create Virtual Account
    </button>
  </div>
);

const AccountsTable: React.FC<{
  accounts: VirtualAccount[];
  onViewAccountDetails: (accountId: string) => void;
}> = ({ accounts, onViewAccountDetails }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-[#EEF0F0]">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Account Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Purpose
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Currency
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Bank
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {accounts.map((account) => (
            <tr key={account.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="font-semibold text-base text-black">
                  {account.accountName}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-base text-gray-600">
                  {account.purpose === "inbound_invoices"
                    ? "Inbound Invoices"
                    : "Settlements"}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-base text-gray-600">{account.currency}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p className="text-base text-gray-600">{account.bank}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={account.status} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap space-x-4">
                <button
                  onClick={() => onViewAccountDetails(account.id)}
                  className="text-[#214D76] font-bold text-base hover:underline"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const VirtualAccountsPage: React.FC<VirtualAccountsPageProps> = ({
  onNavigate,
  accounts,
  onAddAccount,
  onDeleteAccount,
  onViewAccountDetails,
  isVerified = false,
}) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-sans">
      <Header onNavigate={onNavigate} isVerified={isVerified} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={() => onNavigate("dashboard")}
                className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap"
              >
                <ArrowBackIcon />
                <span>Back to Dashboard</span>
              </button>
              <h1 className="text-4xl font-bold text-[#214D76]">
                Virtual Accounts
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                Manage your virtual bank account incoming transfers.
              </p>
            </div>

            {accounts.length > 0 && (
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 bg-[#214D76] text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
              >
                <PlusIcon />
                Create Virtual Account
              </button>
            )}
          </div>

          {accounts.length === 0 ? (
            <EmptyState onOpenModal={() => setIsCreateModalOpen(true)} />
          ) : (
            <AccountsTable
              accounts={accounts}
              onViewAccountDetails={onViewAccountDetails}
            />
          )}
        </div>
      </main>
      {isCreateModalOpen && (
        <CreateVAModal
          onClose={() => setIsCreateModalOpen(false)}
          onAddAccount={onAddAccount}
        />
      )}
    </div>
  );
};

export default VirtualAccountsPage;
