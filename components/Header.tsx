import React, { useState, useEffect, useRef } from 'react';
import { LogoIcon, BellIcon, DropdownArrowIcon, WarningIconSmall } from './Icons';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => handleNavigation('dashboard')} className="flex items-center gap-3">
            <LogoIcon />
            <span className="text-2xl font-bold text-black">Fintech</span>
          </button>
          <div className="flex items-center gap-5">
            <button aria-label="Notifications" className="text-gray-600 hover:text-gray-800">
              <BellIcon />
            </button>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-4 p-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#214D76] transition-colors"
                aria-label="User menu"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://picsum.photos/50/50"
                  alt="User avatar"
                />
                <div className="text-left">
                  <p className="font-bold text-base text-black">John Doe</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-[#991B1B]">Unverified</span>
                    <WarningIconSmall />
                  </div>
                </div>
                <div className={`text-gray-500 transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  <DropdownArrowIcon />
                </div>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('dashboard'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Dashboard</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('wallet'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Wallet & Transactions</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('virtual-accounts'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Virtual Accounts</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('rates-and-quotes'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Rates & Quotes</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('audit-log-viewer'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Audit Log Viewer</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('kyc'); }} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Complete KYC</a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Account settings</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors" role="menuitem">Support</a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={() => { /* Handle sign out logic */ setIsDropdownOpen(false); }}
                      className="w-full text-left text-red-600 block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;