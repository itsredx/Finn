import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import { Page } from '../types';

interface ForgotPasswordPageProps {
  onNavigate: (page: Page) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock password reset - in a real app, this would make an API call
    console.log('Password reset request:', { email });
    alert('Password reset link sent to your email!');
  };

  return (
    <AuthLayout>
      <div className="mb-6 text-left">
        <h2 className="text-[35px] font-extrabold text-[#111418]">Forgot Password?</h2>
        <p className="mt-2 text-sm text-gray-600">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <Button className="w-9/12 mx-auto">Send Reset Link</Button>
        </div>
      </form>
      
      <p className="mt-8 text-center text-sm text-gray-600">
        <button 
          onClick={() => onNavigate('signin')}
          className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center justify-center gap-2 mx-auto"
        >
          {/* Simple back arrow SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Sign in
        </button>
      </p>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;