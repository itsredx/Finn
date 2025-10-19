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
import CreateQuotePage from './pages/CreateQuotePage';
import AuditLogViewerPage from './pages/AuditLogViewerPage';
import AuditLogDetailsPage from './pages/AuditLogDetailsPage';
import { VerifiedProvider } from './context/VerifiedContext';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { Page, Transaction, VirtualAccount, VirtualAccountStatus } from './types';
import { ALL_TRANSACTIONS_DATA, VIRTUAL_ACCOUNTS_DATA } from './constants';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('signin');
  const [isVerified, setIsVerified] = useState<boolean>(true);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [selectedVirtualAccount, setSelectedVirtualAccount] = useState<VirtualAccount | null>(null);
  const [virtualAccounts, setVirtualAccounts] = useState<VirtualAccount[]>(VIRTUAL_ACCOUNTS_DATA);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
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
    // If not authenticated, show auth pages
    if (!isAuthenticated) {
      switch (currentPage) {
        case 'signin':
          return <SignInPage onNavigate={handleNavigate} onAuthSuccess={handleAuthSuccess} />;
        case 'signup':
          return <SignUpPage onNavigate={handleNavigate} onAuthSuccess={handleAuthSuccess} />;
        case 'forgot-password':
          return <ForgotPasswordPage onNavigate={handleNavigate} />;
        default:
          return <SignInPage onNavigate={handleNavigate} onAuthSuccess={handleAuthSuccess} />;
      }
    }

    // Authenticated pages
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'kyc':
        return <KycPage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'wallet':
        return <WalletPage onNavigate={handleNavigate} onViewTransaction={handleViewTransaction} isVerified={isVerified} />;
      case 'virtual-accounts':
        return <VirtualAccountsPage 
                    onNavigate={handleNavigate} 
                    accounts={virtualAccounts} 
                    onAddAccount={handleAddAccount}
                    onDeleteAccount={handleDeleteAccount}
                    onViewAccountDetails={handleViewAccountDetails}
                    isVerified={isVerified}
                />;
      case 'wallet-transaction-details':
        if (selectedTransaction) {
          return <TransactionDetailsPage transaction={selectedTransaction} onNavigate={handleNavigate} isVerified={isVerified} />;
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
            isVerified={isVerified}
          />;
        }
        handleNavigate('virtual-accounts');
        return null;
      case 'create-transfer':
        return <CreateTransferPage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'request-payout':
        return <RequestPayoutPage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'rates-and-quotes':
        return <RatesAndQuotesPage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'create-quote':
        return <CreateQuotePage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'audit-log-viewer':
        return <AuditLogViewerPage onNavigate={handleNavigate} isVerified={isVerified} />;
      case 'audit-log-details':
        return <AuditLogDetailsPage onNavigate={handleNavigate} isVerified={isVerified} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <VerifiedProvider value={isVerified}>
      {renderPage()}
    </VerifiedProvider>
  );
};

export default App;