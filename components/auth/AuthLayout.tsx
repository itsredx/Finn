import React from 'react';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
  isSignUpPage?: boolean;
}

export default function AuthLayout({ children, isSignUpPage = false }: AuthLayoutProps) {
  const transition = { duration: 0.6, type: 'spring', stiffness: 120, damping: 18 } as const;

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Image Panel: absolute, 50vw wide, slides left/right; hidden on mobile */}
      <motion.div
        className="hidden md:flex absolute top-0 left-0 h-screen w-[50vw] bg-[#214D76] justify-center items-center z-30"
        animate={{ x: isSignUpPage ? '0vw' : '50vw', }}
        transition={transition}
      >
        <div className="w-[50vw] p-12">
          <img
            src="/auth-graphic.jpg"
            alt="Secure Digital Transfers and Seamless Payouts"
            className="w-full h-auto"
            width={750}
            height={750}
          />
        </div>
      </motion.div>

      {/* Form Panel: adds padding to make room for the sliding image panel */}
      <motion.div
        className="relative min-h-screen flex items-center justify-center p-8 z-20 bg-transparent"
        animate={{
          paddingLeft: isSignUpPage ? '50vw' : '0vw',
          paddingRight: isSignUpPage ? '0vw' : '50vw',
        }}
        transition={transition}
      >
        <div className="w-full max-w-md bg-gray-100">
          {children}
        </div>

        <div className="absolute bottom-8 flex items-center space-x-2 text-sm text-[#637188]">
          <a href="#" className="flex items-center gap-2 hover:underline">
            <span>English</span>
          </a>
          <span>&middot;</span>
          <a href="#" className="hover:underline">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </motion.div>
    </div>
  );
}
