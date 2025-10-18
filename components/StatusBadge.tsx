import React from 'react';
import { TransactionStatus, KycStatus, VirtualAccountStatus } from '../types';

interface StatusBadgeProps {
  status: TransactionStatus | KycStatus | VirtualAccountStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let statusText: string;
  let statusClasses: string;

  switch (status) {
    case TransactionStatus.Completed:
    case KycStatus.Approved:
    case VirtualAccountStatus.Active:
      statusText = 'Confirmed';
      if (status === KycStatus.Approved) statusText = 'Approved';
      if (status === VirtualAccountStatus.Active) statusText = 'Active';
      statusClasses = 'bg-green-100 text-green-800';
      break;
    case TransactionStatus.Pending:
    case KycStatus.Pending:
    case VirtualAccountStatus.Pending:
      statusText = 'Pending';
      statusClasses = 'bg-yellow-100 text-yellow-800';
      break;
    case TransactionStatus.Failed:
    case KycStatus.Rejected:
    case VirtualAccountStatus.Closed:
      statusText = 'Failed';
      if (status === KycStatus.Rejected) statusText = 'Rejected';
      if (status === VirtualAccountStatus.Closed) statusText = 'Closed';
      statusClasses = 'bg-red-100 text-red-800';
      break;
    case KycStatus.NotSubmitted:
        statusText = 'Not Submitted';
        statusClasses = 'bg-gray-100 text-gray-800';
        break;
    default:
      statusText = 'Unknown';
      statusClasses = 'bg-gray-100 text-gray-800';
  }

  return (
    <span
      className={`px-4 py-2 text-base font-semibold rounded-lg inline-flex items-center ${statusClasses}`}
    >
      {statusText}
    </span>
  );
};

export default StatusBadge;