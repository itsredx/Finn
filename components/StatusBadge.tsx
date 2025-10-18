import React from 'react';
import { TransactionStatus, KycStatus, VirtualAccountStatus, QuoteStatus } from '../types';

interface StatusBadgeProps {
  status: TransactionStatus | KycStatus | VirtualAccountStatus | QuoteStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let statusText: string;
  let statusClasses: string;

  switch (status) {
    case TransactionStatus.Completed:
    case KycStatus.Approved:
    case VirtualAccountStatus.Active:
    case QuoteStatus.Active:
      statusText = status === QuoteStatus.Active ? 'Active' : (status === TransactionStatus.Completed ? 'Confirmed' : status);
      statusClasses = 'bg-[#E9F9F0] text-[#008A38]';
      break;
    
    case TransactionStatus.Pending:
    case KycStatus.Pending:
    case VirtualAccountStatus.Pending:
      statusText = 'Pending';
      statusClasses = 'bg-[#FFF7E6] text-[#D46B08]';
      break;
    
    case TransactionStatus.Failed:
    case KycStatus.Rejected:
    case VirtualAccountStatus.Closed:
    case QuoteStatus.Expired:
      statusText = status;
      statusClasses = 'bg-[#FEF0F0] text-[#E53535]';
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
      className={`py-1 px-4 text-base font-medium rounded-full inline-flex items-center justify-center ${statusClasses}`}
    >
      {statusText}
    </span>
  );
};

export default StatusBadge;