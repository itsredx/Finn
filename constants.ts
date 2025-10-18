// FIX: Adding mock data constants for use throughout the application.
import { Transaction, TransactionStatus, TransactionType, ChangeType, Balance, VirtualAccount, VirtualAccountStatus } from './types';
import { UsdIcon, EurIcon } from './components/Icons';

export const DASHBOARD_STATS_DATA = [
  {
    title: 'Total Balance',
    amount: '$1,234,567.89',
    change: '+1.2%',
    changeType: ChangeType.Increase,
    changeText: 'vs last month',
  },
  {
    title: 'Total Payouts',
    amount: '$56,789.12',
    change: '-0.5%',
    changeType: ChangeType.Decrease,
    changeText: 'vs last month',
  },
  {
    title: 'Total Deposits',
    amount: '$123,456.78',
    change: '+3.0%',
    changeType: ChangeType.Increase,
    changeText: 'vs last month',
  },
];

export const ALL_TRANSACTIONS_DATA: Transaction[] = [
  {
    id: '1',
    transactionId: '0.0.12345@1666888999-123456789',
    description: 'Stripe Payout',
    details: 'Received from Stripe Inc.',
    amount: 1500.00,
    date: 'Aug 12, 2023',
    fullDate: 'Aug 12, 2023, 10:30 AM',
    status: TransactionStatus.Completed,
    type: TransactionType.Payout,
    token: 'USDC',
    fee: '1.00 USDC',
    reference: 'REF-SP-12345',
    totalAmount: '1,501.00 USDC',
    sender: {
        walletId: 'w_sender_1',
        businessName: 'Stripe Inc.',
        accountName: 'Stripe Payouts',
    },
    receiver: {
        walletId: 'w_receiver_1',
        businessName: 'John Doe Corp',
        accountName: 'Main USD Account',
    },
    blockchainDetails: {
        txHash: '0xabc123ef456...789ghi012jk1345',
        consensusSequence: '123,456,789',
        confirmedAt: 'Aug 12, 2023, 10:31 AM',
    }
  },
  {
    id: '2',
    transactionId: '0.0.54321@1666888999-987654321',
    description: 'Invoice #INV-007',
    details: 'Payment from Acme Corp',
    amount: 250.75,
    date: 'Aug 11, 2023',
    fullDate: 'Aug 11, 2023, 02:45 PM',
    status: TransactionStatus.Completed,
    type: TransactionType.Deposit,
    token: 'USDC',
    fee: '0.50 USDC',
    reference: 'INV-007',
    totalAmount: '251.25 USDC',
    sender: {
        walletId: '0.0.123456',
        businessName: 'Acme Corp',
        accountName: 'Main Treasury',
    },
    receiver: {
        walletId: '0.0.654321',
        businessName: 'Stark Industries',
        accountName: 'Vendor Payouts',
    },
    blockchainDetails: {
        txHash: '0x123...456',
        consensusSequence: '987,654,321',
        confirmedAt: 'Aug 11, 2023, 02:46 PM',
    }
  },
  {
    id: '3',
    transactionId: 'txn_3c4d5e6f7g8h9i0j',
    description: 'Vendor Payment',
    details: 'Sent to Office Supplies Co.',
    amount: -75.50,
    date: 'Aug 10, 2023',
    fullDate: 'Aug 10, 2023, 09:15 AM',
    status: TransactionStatus.Completed,
    type: TransactionType.Transfer,
    token: 'EUR',
    fee: '0.25 EUR',
    reference: 'PO-9876',
    totalAmount: '-75.75 EUR',
    sender: {
        walletId: 'w_receiver_1',
        businessName: 'John Doe Corp',
        accountName: 'Main USD Account',
    },
    receiver: {
        walletId: 'w_receiver_2',
        businessName: 'Office Supplies Co.',
        accountName: 'Office Supplies Payments',
    },
    blockchainDetails: {
        txHash: '0xdef...abc',
        consensusSequence: '543,216,789',
        confirmedAt: 'Aug 10, 2023, 09:16 AM',
    }
  },
  {
    id: '4',
    transactionId: 'txn_4d5e6f7g8h9i0j1k',
    description: 'Client Deposit',
    details: 'Pending from Tech Solutions',
    amount: 5000.00,
    date: 'Aug 10, 2023',
    fullDate: 'Aug 10, 2023, 05:00 PM',
    status: TransactionStatus.Pending,
    type: TransactionType.Deposit,
    token: 'USDC',
    fee: '2.00 USDC',
    reference: 'PROJ-X',
    totalAmount: '5,002.00 USDC',
    sender: {
        walletId: 'w_sender_3',
        businessName: 'Tech Solutions',
        accountName: 'Tech Solutions Payments',
    },
    receiver: {
        walletId: 'w_receiver_1',
        businessName: 'John Doe Corp',
        accountName: 'Main USD Account',
    },
    blockchainDetails: {
        txHash: 'N/A',
        consensusSequence: 'N/A',
        confirmedAt: 'N/A',
    }
  },
  {
    id: '5',
    transactionId: 'txn_5e6f7g8h9i0j1k2l',
    description: 'Bank Transfer',
    details: 'Failed transfer to supplier',
    amount: -1200.00,
    date: 'Aug 09, 2023',
    fullDate: 'Aug 09, 2023, 11:00 AM',
    status: TransactionStatus.Failed,
    type: TransactionType.Transfer,
    token: 'USDC',
    fee: '1.50 USDC',
    reference: 'SUP-54321',
    totalAmount: '-1,201.50 USDC',
    sender: {
        walletId: 'w_receiver_1',
        businessName: 'John Doe Corp',
        accountName: 'Main USD Account',
    },
    receiver: {
        walletId: 'w_receiver_3',
        businessName: 'Global Imports',
        accountName: 'Global Imports Payments',
    },
    blockchainDetails: {
        txHash: '0xghi...jkl',
        consensusSequence: '135,792,468',
        confirmedAt: 'Aug 09, 2023, 11:01 AM (Failed)',
    }
  },
];

export const BALANCES_DATA: Balance[] = [
    {
      walletId: 'usd_wallet_primary',
      currency: 'USD Wallet (0x123...abc)',
      balance: '$1,234,567.89',
      icon: UsdIcon,
    },
    {
      walletId: 'eur_wallet_secondary',
      currency: 'EUR Wallet (0x456...def)',
      balance: '€87,654.32',
      icon: EurIcon,
    },
];

export const VIRTUAL_ACCOUNTS_DATA: VirtualAccount[] = [
    {
        id: 'va_1',
        accountName: 'Stripe Payouts',
        purpose: 'inbound_invoices',
        currency: 'USD',
        bank: 'Community Federal Savings Bank',
        status: VirtualAccountStatus.Active,
        accountHolder: 'John Doe Corp',
        creationDate: 'July 15, 2023',
        accountNumber: '**** **** **** 1234',
        routingNumber: '026073150',
    },
    {
        id: 'va_2',
        accountName: 'EU Settlements',
        purpose: 'settlements',
        currency: 'EUR',
        bank: 'J.P. Morgan SE',
        status: VirtualAccountStatus.Active,
        accountHolder: 'John Doe Corp',
        creationDate: 'June 20, 2023',
        accountNumber: '**** **** **** 5678',
        routingNumber: 'CHASDEFX',
    },
    {
        id: 'va_3',
        accountName: 'New Client Onboarding',
        purpose: 'inbound_invoices',
        currency: 'USD',
        bank: 'Community Federal Savings Bank',
        status: VirtualAccountStatus.Pending,
        accountHolder: 'John Doe Corp',
        creationDate: 'Aug 13, 2023',
        accountNumber: 'Pending',
        routingNumber: 'Pending',
    },
];
