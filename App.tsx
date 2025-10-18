// FIX: Implementing the main App component to handle page navigation and application state.
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import KycPage from './pages/KycPage';
import WalletPage from './pages/WalletPage';
import VirtualAccountsPage from './pages/VirtualAccountsPage';
import TransactionDetailsPage from './pages/TransactionDetailsPage';
import VirtualAccountDetailsPage from './pages/VirtualAccountDetailsPage';
import CreateTransferPage from './pages/CreateTransferPage';
import RequestPayoutPage from './pages/RequestPayoutPage';
import RatesAndQuotesPage from './pages/RatesAndQuotesPage';
import { Page, Transaction, VirtualAccount, VirtualAccountStatus } from './types';
import { ALL_TRANSACTIONS_DATA, VIRTUAL_ACCOUNTS_DATA } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // demo sign in for login simulation
  const [currentPage, setCurrentPage] = useState<Page>('signin');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [selectedVirtualAccount, setSelectedVirtualAccount] = useState<VirtualAccount | null>(null);
  const [virtualAccounts, setVirtualAccounts] = useState<VirtualAccount[]>(VIRTUAL_ACCOUNTS_DATA);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const handleViewTransaction = (transactionId: string) => {
    const transaction = ALL_TRANSACTIONS_DATA.find(t => t.id === transactionId);
    if (transaction) {
      setSelectedTransaction(transaction);
      handleNavigate('wallet-transaction-details');
    }
  };

  const handleViewAccountDetails = (accountId: string) => {
    const account = virtualAccounts.find(a => a.id === accountId);
    if (account) {
        setSelectedVirtualAccount(account);
        handleNavigate('virtual-account-details');
    }
  };

  const handleAddAccount = (accountData: { accountName: string; currency: 'USD' | 'EUR'; purpose: 'inbound_invoices' | 'settlements' }) => {
    const newAccount: VirtualAccount = {
        id: `va_${Date.now()}`,
        ...accountData,
        bank: accountData.currency === 'USD' ? 'Community Federal Savings Bank' : 'J.P. Morgan SE',
        status: VirtualAccountStatus.Active,
        accountHolder: 'John Doe Corp',
        creationDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        accountNumber: `**** **** **** ${Math.floor(1000 + Math.random() * 9000)}`,
        routingNumber: accountData.currency === 'USD' ? '026073150' : 'CHASDEFX',
    };
    setVirtualAccounts(prev => [...prev, newAccount]);
  };

  const handleDeleteAccount = (accountId: string) => {
    setVirtualAccounts(prev => prev.filter(account => account.id !== accountId));
    handleNavigate('virtual-accounts');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'kyc':
        return <KycPage onNavigate={handleNavigate} />;
      case 'wallet':
        return <WalletPage onNavigate={handleNavigate} onViewTransaction={handleViewTransaction} />;
      case 'virtual-accounts':
        return <VirtualAccountsPage 
                    onNavigate={handleNavigate} 
                    accounts={virtualAccounts} 
                    onAddAccount={handleAddAccount}
                    onDeleteAccount={handleDeleteAccount}
                    onViewAccountDetails={handleViewAccountDetails}
                />;
      case 'wallet-transaction-details':
        if (selectedTransaction) {
          return <TransactionDetailsPage transaction={selectedTransaction} onNavigate={handleNavigate} />;
        }
        // Fallback to wallet page if no transaction is selected
        handleNavigate('wallet');
        return null;
      case 'virtual-account-details':
        if (selectedVirtualAccount) {
            return <VirtualAccountDetailsPage 
                        account={selectedVirtualAccount} 
                        onNavigate={handleNavigate} 
                        onDelete={handleDeleteAccount} 
                    />;
        }
        handleNavigate('virtual-accounts');
        return null;
      case 'create-transfer':
        return <CreateTransferPage onNavigate={handleNavigate} />;
      case 'request-payout':
        return <RequestPayoutPage onNavigate={handleNavigate} />;
      case 'rates-and-quotes':
        return <RatesAndQuotesPage onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return <>{renderPage()}</>;
};

export default App;