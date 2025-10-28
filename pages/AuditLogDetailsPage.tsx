import React from 'react';
import { Page } from '../types';
import { ArrowBackIcon } from '../components/Icons';

interface AuditLogDetailsPageProps {
  onNavigate: (page: Page) => void;
  auditLogId?: string;
}

interface AuditLogDetails {
  eventType: string;
  sequenceId: string;
  transactionId: string;
  businessName: string;
  timestamp: string;
  status: string;
}

const MOCK_AUDIT_LOG_DETAILS: AuditLogDetails = {
  eventType: 'Transfer',
  sequenceId: '12345-67890',
  transactionId: 'a1b2c3d4-e5f6-g7h8-i9j0-k112m3n4o5p6',
  businessName: 'Fictional Bank Inc.',
  timestamp: '2023-10-27 14:30:00',
  status: 'Published'
};

const AuditLogDetailsPage: React.FC<AuditLogDetailsPageProps> = ({ onNavigate, auditLogId }) => {
  return (
    <div className="min-h-screen bg-[#F6F7F8] p-8">
      {/* Header section */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-[32px] font-black text-[#214D76] font-inter">Audit Log Details</h1>
        <button 
          onClick={() => onNavigate('audit-log-viewer')}
          className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap"
        >
          <ArrowBackIcon />
          <span className="text-xl font-medium">Back to Audit Log</span>
        </button>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-[15px] shadow-md p-12 max-w-4xl mx-auto">
        <p className="text-xl text-[#637188] mb-8 font-inter">
          View the details of a specific audit log event.
        </p>

        <div className="space-y-8">
          {/* Event Type */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Event Type</h3>
            </div>
            <div className="flex-1">
              <p className="text-xl font-medium text-black font-inter">{MOCK_AUDIT_LOG_DETAILS.eventType}</p>
            </div>
          </div>

          {/* Sequence ID */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Sequence ID</h3>
            </div>
            <div className="flex-1">
              <p className="text-xl font-medium text-black font-mono">{MOCK_AUDIT_LOG_DETAILS.sequenceId}</p>
            </div>
          </div>

          {/* Transaction ID */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Transaction ID</h3>
            </div>
            <div className="flex-1">
              <p className="text-xl font-medium text-[#214D76] font-mono break-all">
                {MOCK_AUDIT_LOG_DETAILS.transactionId}
              </p>
            </div>
          </div>

          {/* Business Name */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Business Name</h3>
            </div>
            <div className="flex-1">
              <p className="text-xl font-medium text-black font-inter">{MOCK_AUDIT_LOG_DETAILS.businessName}</p>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Timestamp</h3>
            </div>
            <div className="flex-1">
              <p className="text-xl font-medium text-black font-inter">{MOCK_AUDIT_LOG_DETAILS.timestamp}</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-start gap-[221px]">
            <div className="w-32">
              <h3 className="text-xl font-medium text-[#637188] font-inter">Status</h3>
            </div>
            <div className="flex-1">
              <span className="inline-block px-4 py-1 bg-[#E6F4EA] text-[#1E8E3E] rounded-full text-sm font-medium">
                {MOCK_AUDIT_LOG_DETAILS.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-[#8D8F91] text-sm">
        <div className="flex items-center justify-center gap-8 mb-4">
          <a href="#" className="hover:text-[#214D76]">Help Center</a>
          <a href="#" className="hover:text-[#214D76]">Privacy Policy</a>
          <a href="#" className="hover:text-[#214D76]">Terms of Service</a>
        </div>
        <p>© 2023 Fintech App. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AuditLogDetailsPage;