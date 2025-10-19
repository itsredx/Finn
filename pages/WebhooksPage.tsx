import React, { useState } from 'react';
import Header from '../components/Header';
import StatusBadge from '../components/StatusBadge';
import { Page } from '../types';
import { ArrowBackIcon, CopyIcon, TrashIcon, PlayCircleIcon } from '../components/Icons';

interface WebhooksPageProps {
  onNavigate: (page: Page) => void;
  isVerified?: boolean;
}

const WebhooksPage: React.FC<WebhooksPageProps> = ({ onNavigate, isVerified = false }) => {
  const [rows, setRows] = useState(() => [
    { id: 1, url: 'https://api.example.com/webhook', event: 'Payout Failed', secret: 's3cr3t-1', status: 'Active' },
    { id: 2, url: 'https://api.example.com/webhook', event: 'Payout Failed', secret: 's3cr3t-2', status: 'Disabled' },
    { id: 3, url: 'https://api.example.com/webhook', event: 'Payout Failed', secret: 's3cr3t-3', status: 'Active' },
  ]);

  const [endpointInput, setEndpointInput] = useState('');
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [triggeredId, setTriggeredId] = useState<number | null>(null);

  const registerWebhook = () => {
    if (!endpointInput) return;
    const newRow = { id: Date.now(), url: endpointInput, event: selectedEvents[0] || 'Payout Failed', secret: `s3cr3t-${Date.now()}`, status: 'Active' } as any;
    setRows(prev => [newRow, ...prev]);
    setEndpointInput('');
    setSelectedEvents([]);
  };

  const deleteRow = (id: number) => {
    setRows(prev => prev.filter(r => r.id !== id));
  };

  const triggerRow = (id: number) => {
    setTriggeredId(id);
    setTimeout(() => setTriggeredId(null), 2000);
  };

  const copySecret = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const copyDocs = () => {
    navigator.clipboard.writeText('https://docs.example.com/webhooks').then(() => {
      // simple feedback can be added here
      alert('Docs URL copied');
    });
  };

  return (
    <div className="bg-[#F6F7F8] min-h-screen font-inter">
      <Header onNavigate={onNavigate} isVerified={isVerified} />
      <main className="p-8 lg:p-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl font-extrabold text-[#214D76]">Webhooks &amp; Notifications</h1>
              <p className="text-xl text-[#637188] mt-2">Configure endpoint to receive real-time updates on your asset transfers.</p>
            </div>
            <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-4 text-xl font-medium text-[#637188] hover:text-[#214D76] whitespace-nowrap">
              <ArrowBackIcon />
              <span>Back to Dashboard</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-white">
                  <tr className="border-b border-gray-300 text-left">
                    <th className="px-6 py-5 text-lg font-semibold text-black">Endpoint URL</th>
                    <th className="px-6 py-5 text-lg font-semibold text-black">Event Types</th>
                    <th className="px-6 py-5 text-lg font-semibold text-black">Secret</th>
                    <th className="px-6 py-5 text-lg font-semibold text-black">Status</th>
                    <th className="px-6 py-5 text-lg font-semibold text-black">Action</th>
                  </tr>
                </thead>
                <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-6 py-5 text-lg text-[#214D76] font-medium">{r.url}</td>
                    <td className="px-6 py-5"><span className="bg-[#EEF6FF] text-[#2B6CB0] text-xs px-3 py-1 rounded-full">{r.event}</span></td>
                    <td className="px-6 py-5 text-lg text-black">{r.secret} <button className="ml-2 text-gray-400" onClick={() => copySecret(r.secret, r.id)}>{copiedId === r.id ? <span className="text-sm text-green-600">Copied!</span> : <CopyIcon />}</button></td>
                    <td className="px-6 py-5"><StatusBadge status={r.status as any} /></td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col items-center gap-2">
                        <button onClick={() => triggerRow(r.id)} className="text-gray-500 p-2 rounded-full hover:bg-gray-100"><PlayCircleIcon /></button>
                        <button onClick={() => deleteRow(r.id)} className="text-gray-500 p-2 rounded-full hover:bg-gray-100"><TrashIcon /></button>
                        {triggeredId === r.id && <div className="text-sm text-[#214D76] mt-1">Triggered</div>}
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Register Webhook</h2>
              <label className="block text-sm text-gray-600 mb-2">Endpoint URL</label>
              <input value={endpointInput} onChange={(e) => setEndpointInput(e.target.value)} className="w-full p-3 rounded-md border border-gray-200 mb-4 bg-gray-50" placeholder="https://api.example.com/webhook" />

              <p className="font-medium mb-2">Subscribed Events</p>
              <div className="space-y-2 mb-4">
                <label className="flex items-center gap-3"><input checked={selectedEvents.includes('Payout Sent')} onChange={(e) => setSelectedEvents(s => e.target.checked ? [...s, 'Payout Sent'] : s.filter(x => x !== 'Payout Sent'))} type="checkbox" /> <span>Payout Sent</span></label>
                <label className="flex items-center gap-3"><input checked={selectedEvents.includes('Transfer Received')} onChange={(e) => setSelectedEvents(s => e.target.checked ? [...s, 'Transfer Received'] : s.filter(x => x !== 'Transfer Received'))} type="checkbox" /> <span>Transfer Received</span></label>
                <label className="flex items-center gap-3"><input checked={selectedEvents.includes('Payout Failed')} onChange={(e) => setSelectedEvents(s => e.target.checked ? [...s, 'Payout Failed'] : s.filter(x => x !== 'Payout Failed'))} type="checkbox" /> <span>Payout Failed</span></label>
              </div>

              <button onClick={registerWebhook} className="bg-[#214D76] text-white px-6 py-3 rounded-lg">Register Webhook</button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Secret Management</h2>
              <p className="text-gray-500 mb-4">Your webhook secret is used to verify that incoming requests are from our service. Use it to compute an HMAC signature of the request payload.</p>
              <button onClick={copyDocs} className="w-full border border-gray-200 rounded-md p-3 text-[#214D76] flex items-center justify-center gap-2"><CopyIcon /> Copy Docs URL</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default WebhooksPage;
