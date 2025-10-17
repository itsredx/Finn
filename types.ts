
export enum ChangeType {
    Increase,
    Decrease,
}
  
export enum TransactionType {
    Payout,
    Deposit,
}
  
export enum TransactionStatus {
    Completed,
    Pending,
    Failed,
}
  
export interface Transaction {
    id: string;
    type: TransactionType;
    description: string;
    details: string;
    amount: number;
    date: string;
    status: TransactionStatus;
}

export enum KycStatus {
    NotSubmitted,
    Pending,
    Approved,
    Rejected,
}
  
export type Page = 'dashboard' | 'kyc' | 'virtual-accounts';

export enum VirtualAccountStatus {
    Active,
    Pending,
    Closed,
}

export interface VirtualAccount {
    id: string;
    accountName: string;
    purpose: 'inbound_invoices' | 'settlements';
    currency: 'USD' | 'EUR';
    bank: string;
    status: VirtualAccountStatus;
    accountHolder: string;
    accountNumber: string;
    routingNumber: string;
    creationDate: string;
}