import React from 'react';

export type Page = 
  | 'dashboard'
  | 'wallet'
  | 'virtual-accounts'
  | 'kyc'
  | 'create-transfer'
  | 'wallet-transaction-details'
  | 'virtual-account-details'
  | 'request-payout'
  | 'rates-and-quotes';

export enum ChangeType {
  Increase = 'increase',
  Decrease = 'decrease',
}

export enum TransactionStatus {
  Completed = 'Completed',
  Pending = 'Pending',
  Failed = 'Failed',
}

export enum KycStatus {
    Approved = 'Approved',
    Pending = 'Pending',
    Rejected = 'Rejected',
    NotSubmitted = 'Not Submitted',
}

export enum VirtualAccountStatus {
    Active = 'Active',
    Pending = 'Pending',
    Closed = 'Closed',
}

export enum QuoteStatus {
    Active = 'Active',
    Expired = 'Expired',
}

export enum TransactionType {
  Deposit = 'Deposit',
  Payout = 'Payout',
  Transfer = 'Transfer',
}

export interface Transaction {
  id: string;
  transactionId: string;
  description: string;
  details: string;
  amount: number;
  date: string;
  fullDate: string;
  status: TransactionStatus;
  type: TransactionType;
  token: string;
  fee: string;
  reference: string;
  totalAmount: string;
  sender: {
    walletId: string;
    businessName: string;
    accountName: string;
  };
  receiver: {
    walletId: string;
    businessName: string;
    accountName: string;
  };
  blockchainDetails: {
    txHash: string;
    consensusSequence: string;
    confirmedAt: string;
  };
}

export interface Balance {
    walletId: string;
    currency: string;
    balance: string;
    icon: React.FC;
}

export interface VirtualAccount {
    id: string;
    accountName: string;
    purpose: 'inbound_invoices' | 'settlements';
    currency: 'USD' | 'EUR';
    bank: string;
    status: VirtualAccountStatus;
    accountHolder: string;
    creationDate: string;
    accountNumber: string;
    routingNumber: string;
}
