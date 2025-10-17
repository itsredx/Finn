import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import KycPage from './pages/KycPage';
import VirtualAccountsPage from './pages/VirtualAccountsPage';
import { Page, VirtualAccount, VirtualAccountStatus } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [virtualAccounts, setVirtualAccounts] = useState<VirtualAccount[]>([]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const handleAddVirtualAccount = (account: { accountName: string; currency: 'USD' | 'EUR', purpose: 'inbound_invoices' | 'settlements' }) => {
    const newAccount: VirtualAccount = {
      id: new Date().toISOString() + Math.random(),
      accountName: account.accountName,
      currency: account.currency,
      purpose: account.purpose,
      bank: ['MC Bank', 'ABC Bank', 'XYZ Bank'][Math.floor(Math.random() * 3)],
      status: VirtualAccountStatus.Active,
      accountHolder: 'John Doe',
      accountNumber: `*******${Math.floor(1000 + Math.random() * 9000)}`,
      routingNumber: `021000021`,
      creationDate: new Date().toISOString().split('T')[0],
    };
    setVirtualAccounts(prev => [...prev, newAccount]);
  };

  const handleDeleteVirtualAccount = (accountId: string) => {
    setVirtualAccounts(prev => prev.filter(acc => acc.id !== accountId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'kyc':
        return <KycPage onNavigate={handleNavigate} />;
      case 'virtual-accounts':
        return <VirtualAccountsPage 
                  onNavigate={handleNavigate} 
                  accounts={virtualAccounts}
                  onAddAccount={handleAddVirtualAccount} 
                  onDeleteAccount={handleDeleteVirtualAccount}
                />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
