import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import { Page } from '../types';

interface SignUpPageProps {
  onNavigate: (page: Page) => void;
  onAuthSuccess: () => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Mock registration - in a real app, this would make an API call
    console.log('Sign up attempt:', { email, password, rememberMe });
    onAuthSuccess();
  };

  return (
    <AuthLayout isSignUpPage>
      <div className="mb-8 text-left">
        <h2 className="text-[35px] font-extrabold text-[#111418]">Create an Account</h2>
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
        <Input
          id="create-password"
          label="Create Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-semibold">
            Remember me
          </label>
        </div>

        <div>
          <Button className="w-9/12 mx-auto">Sign up</Button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button 
          onClick={() => onNavigate('signin')}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign in
        </button>
      </p>
    </AuthLayout>
  );
};

export default SignUpPage;