
import { Transaction, TransactionType, TransactionStatus, ChangeType } from './types';

export const STATS_CARDS_DATA = [
  {
    title: 'Wallet Balance',
    amount: '$12,345.67',
    change: '2.5%',
    changeType: ChangeType.Increase,
    changeText: null,
  },
  {
    title: 'Pending Payouts',
    amount: '$12,345.67',
    change: '1.2%',
    changeType: ChangeType.Decrease,
    changeText: null,
  },
  {
    title: 'Recent Transfer(7d)',
    amount: '15 Transfers',
    change: null,
    changeType: ChangeType.Increase,
    changeText: '+5 from last week',
  },
];


export const TRANSACTIONS_DATA: Transaction[] = [
  {
    id: '1',
    type: TransactionType.Payout,
    description: 'Payout to Bank Account',
    details: 'Acme inc. Saving',
    amount: -550.00,
    date: 'Oct 26, 2023',
    status: TransactionStatus.Completed,
  },
  {
    id: '2',
    type: TransactionType.Deposit,
    description: 'Transfer from Stripe',
    details: 'Platform Fees',
    amount: 1200.50,
    date: 'Oct 25, 2023',
    status: TransactionStatus.Completed,
  },
  {
    id: '3',
    type: TransactionType.Payout,
    description: 'Payout to Paypal',
    details: 'John.doe@example.com',
    amount: -200.00,
    date: 'Oct 24, 2023',
    status: TransactionStatus.Pending,
  },
  {
    id: '4',
    type: TransactionType.Deposit,
    description: 'Transfer from Client',
    details: 'Invoice #INV-0012',
    amount: 5000.00,
    date: 'Oct 23, 2023',
    status: TransactionStatus.Completed,
  },
  {
    id: '5',
    type: TransactionType.Payout,
    description: 'Payout to Bank Account',
    details: 'Venture Capital LLC',
    amount: -1700.00,
    date: 'Oct 22, 2023',
    status: TransactionStatus.Failed,
  },
];
