import React, { useState } from 'react';
import { Page } from '../types';
import Header from '../components/Header';
import { ArrowBackIcon, DropdownArrowIcon, CalendarIcon, SearchIcon, FilterIcon, ChevronLeftIcon, ChevronDownIcon } from '../components/Icons';

interface AuditLogViewerPageProps {
  onNavigate: (page: Page) => void;
}

interface AuditLogEntry {
  sequence: string;
  eventType: 'Transfer' | 'Payout';
  timestamp: string;
  business: string;
  transactionId: string;
}

const MOCK_AUDIT_LOG_DATA: AuditLogEntry[] = [
  {
    sequence: '12345',
    eventType: 'Transfer',
    timestamp: '2023-10-27 10:00',
    business: 'Business A',
    transactionId: 'a1b2c3d4'
  },
  {
    sequence: '12346',
    eventType: 'Payout',
    timestamp: '2023-10-27 10:05',
    business: 'Business B',
    transactionId: 'a1b2c3sf3'
  },
  {
    sequence: '12347',
    eventType: 'Transfer',
    timestamp: '2023-10-27 10:10',
    business: 'Business C',
    transactionId: 'b2c3xc09'
  },
  {
    sequence: '12348',
    eventType: 'Transfer',
    timestamp: '2023-10-27 10:15',
    business: 'Business D',
    transactionId: 'r2c3x1bc2'
  },
  {
    sequence: '12349',
    eventType: 'Payout',
    timestamp: '2023-10-27 10:20',
    business: 'Business F',
    transactionId: 'j1h2df9t0'
  }
];

const AuditLogViewerPage: React.FC<AuditLogViewerPageProps> = ({ onNavigate }) => {
  const [businessId, setBusinessId] = useState('');
  const [eventType, setEventType] = useState('All Event Types');
  const [startDate, setStartDate] = useState('2023-10-05');
  const [endDate, setEndDate] = useState('2023-10-05');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEventTypeOpen, setIsEventTypeOpen] = useState(false);

  const eventTypeOptions = ['All Event Types', 'Transfer', 'Payout'];

  const filteredData = MOCK_AUDIT_LOG_DATA.filter(entry => {
    const matchesBusinessId = !businessId || entry.business.toLowerCase().includes(businessId.toLowerCase());
    const matchesEventType = eventType === 'All Event Types' || entry.eventType === eventType;
    const matchesSearch = !searchQuery || 
      entry.sequence.includes(searchQuery) ||
      entry.business.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesBusinessId && matchesEventType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F6F7F8]">
      <Header onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-[32px] font-black text-[#214D76] font-inter">Audit Log Viewer</h1>
            <p className="text-xl font-medium text-[#637188] font-inter">
              Verify and download immutable transaction record from Hedera Consensus Service(HCS).
            </p>
          </div>
          
          <button 
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-5 text-[#637188] hover:text-[#214D76] transition-colors"
          >
            <ArrowBackIcon />
            <span className="text-xl font-medium">Back to Dashboard</span>
          </button>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-[20px] border border-[#637188] shadow-md p-8 mb-12">
          <div className="flex items-end gap-7 mb-8">
            <div className="flex gap-3">
              {/* Business ID Input */}
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black font-inter">Business ID</label>
                <div className="w-[280px] h-[60px] bg-[#F6F7F8] border border-[#8D8F91] rounded-[15px] px-4 flex items-center">
                  <input
                    type="text"
                    value={businessId}
                    onChange={(e) => setBusinessId(e.target.value)}
                    placeholder="Enter Business ID"
                    className="w-full bg-transparent text-xl font-medium text-[#637188] placeholder-[#637188] outline-none font-inter"
                  />
                </div>
              </div>

              {/* Event Type Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black font-inter">Event Type</label>
                <div className="relative">
                  <button
                    onClick={() => setIsEventTypeOpen(!isEventTypeOpen)}
                    className="w-[280px] h-[60px] bg-[#F6F7F8] border border-[#8D8F91] rounded-[15px] px-4 flex items-center justify-between"
                  >
                    <span className="text-xl font-medium text-black font-inter">{eventType}</span>
                    <DropdownArrowIcon />
                  </button>
                  
                  {isEventTypeOpen && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-[#8D8F91] rounded-[15px] shadow-lg z-10">
                      {eventTypeOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setEventType(option);
                            setIsEventTypeOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-xl font-medium text-black hover:bg-[#F6F7F8] first:rounded-t-[15px] last:rounded-b-[15px]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Date Range */}
              <div className="flex flex-col gap-2">
                <label className="text-xl font-medium text-black font-inter">Date Range</label>
                <div className="w-[280px] h-[60px] bg-[#F6F7F8] border border-[#8D8F91] rounded-[15px] px-4 flex items-center gap-4">
                  <CalendarIcon />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-transparent text-xl font-medium text-black outline-none font-inter"
                  />
                </div>
              </div>
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-2">
              <div className="w-[280px] h-[60px] bg-[#F6F7F8] border border-[#8D8F91] rounded-[15px] px-4 flex items-center gap-4">
                <CalendarIcon />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-transparent text-xl font-medium text-black outline-none font-inter"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Card: Search + Table */}
        <div className="bg-white rounded-[15px] shadow-md overflow-hidden mb-8">
          {/* Search and Filter Bar (top of card) */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-[400px] h-[60px] bg-[#F6F7F8] rounded-[15px] px-6 flex items-center gap-5">
                <SearchIcon />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Transactions..."
                  className="flex-1 bg-transparent text-xl font-semibold text-[#8D8F91] placeholder-[#8D8F91] outline-none font-inter"
                />
              </div>
            </div>
            <div className="w-[132px] h-[60px] bg-[#F6F7F8] rounded-[15px] px-6 flex items-center justify-center gap-3">
              <span className="text-xl font-semibold text-[#8D8F91] font-inter">Filter</span>
              <FilterIcon />
            </div>
          </div>

          {/* Divider between search bar and table */}
          <div className="border-t border-[#E5E7EB]"></div>

          {/* Audit Log Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E5E7EB]">
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Sequence (HCS ID)</th>
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Event Type</th>
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Timestamp</th>
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Business</th>
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Transaction ID</th>
                  <th className="text-left px-6 py-6 text-xl font-medium text-black font-inter">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((entry) => (
                  <tr key={entry.sequence} className="border-b border-[#E5E7EB] hover:bg-[#F6F7F8]/50 transition-colors">
                    <td className="px-6 py-6 text-xl font-medium text-[#637188] font-inter">{entry.sequence}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black font-inter">{entry.eventType}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black font-inter">{entry.timestamp}</td>
                    <td className="px-6 py-6 text-xl font-medium text-black font-inter">{entry.business}</td>
                    <td className="px-6 py-6 text-xl font-medium text-[#214D76] font-mono font-inter">{entry.transactionId}</td>
                    <td className="px-6 py-6">
                      <button 
                        onClick={() => onNavigate('audit-log-details')}
                        className="text-xl font-medium text-[#214D76] hover:text-[#1a3a5b] font-inter transition-colors"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#637188] font-inter">No audit log entries found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogViewerPage;