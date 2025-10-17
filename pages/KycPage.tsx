import React from 'react';
import Header from '../components/Header';
import KycFooter from '../components/KycFooter';
import FormField from '../components/FormField';
import FileUploadCard from '../components/FileUploadCard';
import { IdCardIcon, LocationIcon, BusinessIcon } from '../components/Icons';
import { KycStatus, Page } from '../types';
import StatusBadge from '../components/StatusBadge';

interface KycPageProps {
  onNavigate: (page: Page) => void;
}

const KycPage: React.FC<KycPageProps> = ({ onNavigate }) => {
  const currentKycStatus = KycStatus.NotSubmitted; 

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-inter flex flex-col">
      <Header onNavigate={onNavigate} />
      <main className="p-8 lg:p-16 flex-grow">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Main Header */}
          <div>
            <h1 className="text-4xl font-bold text-[#214D76]">Business Onboarding & KYC</h1>
            <p className="text-lg text-gray-500 mt-2">Please provide your business details for verification. Your data is secure with us.</p>
          </div>

          {/* Business Information Form */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-[#214D76]">Business Information Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <FormField label="Business Name" placeholder="Enter business name" />
              <FormField label="Business Registration Number" placeholder="Enter registration number" />
              <FormField label="Date of Incorporation" placeholder="Select date" type="date" />
              <FormField label="Country of Incorporation" placeholder="Select country" />
            </div>
            <FormField label="Business Address" placeholder="Enter full business address" />
          </section>

          {/* KYC Document Upload */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-[#214D76]">KYC Document Upload</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FileUploadCard 
                icon={<IdCardIcon />}
                title="Certificate of Incorporation"
                description="PDF, PNG, or JPG. Max 5MB."
              />
              <FileUploadCard 
                icon={<LocationIcon />}
                title="Proof of Address"
                description="Utility bill or bank statement."
              />
              <FileUploadCard 
                icon={<BusinessIcon />}
                title="Business License"
                description="If applicable."
              />
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-6 pt-6">
            <button className="bg-[#00B894] text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
              Submit KYC
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="bg-transparent text-[#214D76] font-semibold py-3 px-10 rounded-lg border border-[#214D76] hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          </div>

          {/* KYC Status Section */}
          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-bold text-[#214D76]">KYC Status</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center gap-4">
              <p className="text-lg font-medium text-gray-800">Current Status:</p>
              <StatusBadge status={currentKycStatus} />
            </div>
          </section>

        </div>
      </main>
      <KycFooter />
    </div>
  );
};

export default KycPage;