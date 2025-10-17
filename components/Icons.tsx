import React from 'react';

export const LogoIcon: React.FC = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37 24.6667C37 25.5833 36.6083 26.5 35.825 27.4167L27.4167 37H18.5V27.4167H9.58333L18.5 18.5H27.4167C29.25 18.5 31.0917 17.7167 32.5417 16.2667L37 12.2083V24.6667ZM0 12.3333C0 11.4167 0.391667 10.5 1.175 9.58333L9.58333 0H18.5V9.58333H27.4167L18.5 18.5H9.58333C7.75 18.5 5.90833 19.2833 4.45833 20.7333L0 24.7917V12.3333Z" fill="#0066FF"/>
  </svg>
);

export const BellIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.93 6 11V16L4 18V19H20V18L18 16Z" fill="#1E1E1E"/>
  </svg>
);

export const DropdownArrowIcon: React.FC = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="#637188" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WarningIconSmall: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9.5C6.27614 9.5 6.5 9.27614 6.5 9C6.5 8.72386 6.27614 8.5 6 8.5C5.72386 8.5 5.5 8.72386 5.5 9C5.5 9.27614 5.72386 9.5 6 9.5Z" fill="#991B1B" stroke="#991B1B" strokeWidth="0.5"/>
    <path d="M6 2.5V6.5" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M1 10L6 1L11 10H1Z" stroke="#991B1B" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const WarningIconLarge: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9V13" stroke="#DC3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17.01L12.01 16.999" stroke="#DC3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.51465 18.5L12 3L20.4853 18.5H3.51465Z" stroke="#DC3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpIcon: React.FC<{className?: string}> = ({className = "text-green-500"}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 11L12 4L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDownIcon: React.FC<{className?: string}> = ({className = "text-red-500"}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 13L12 20L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SendIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white"/>
  </svg>
);

export const RequestPageIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V12" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 15H15" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DepositIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9H22" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 15H22" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3Z" stroke="#1E1E1E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 18V6" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IdCardIcon: React.FC = () => (
  <svg width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50.0625 0H3.9375C1.76344 0 0 1.85937 0 4.125V37.875C0 40.1406 1.76344 42 3.9375 42H50.0625C52.2366 42 54 40.1406 54 37.875V4.125C54 1.85937 52.2366 0 50.0625 0ZM14.7656 21C14.7656 24.5156 11.9794 27.375 8.53125 27.375C5.08312 27.375 2.29688 24.5156 2.29688 21C2.29688 17.4844 5.08312 14.625 8.53125 14.625C11.9794 14.625 14.7656 17.4844 14.7656 21ZM51.7031 31.5H18.8438V28.4062C18.8438 24.2812 25.3125 22.1484 29.25 22.1484C33.1875 22.1484 39.6562 24.2812 39.6562 28.4062V31.5H51.7031ZM51.7031 21H29.25V14.625H51.7031V21Z" fill="#214D76"/>
  </svg>
);

export const LocationIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0C11.1641 0 4.21875 7.03125 4.21875 15.625C4.21875 27.3438 20 40 20 40C20 40 35.7812 27.3438 35.7812 15.625C35.7812 7.03125 28.8359 0 20 0ZM20 21.875C16.4844 21.875 13.5938 19 13.5938 15.625C13.5938 12.25 16.4844 9.375 20 9.375C23.5156 9.375 26.4062 12.25 26.4062 15.625C26.4062 19 23.5156 21.875 20 21.875Z" fill="#214D76"/>
  </svg>
);

export const BusinessIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3333 11.6667H23.3333V5H16.6667V11.6667H6.66667L13.3333 21.6667V31.6667H26.6667V21.6667L33.3333 11.6667ZM13.3333 18.3333L10 13.3333H16.6667V30H13.3333V18.3333ZM26.6667 18.3333V30H23.3333V13.3333H30L26.6667 18.3333Z" fill="#214D76"/>
  </svg>
);

export const CheckmarkIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BankAccountIcon: React.FC = () => (
  <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0L0 11.75V16.45L25 4.7L50 16.45V11.75L25 0ZM45.8333 18.8H4.16667V21.175H45.8333V18.8ZM4.16667 25.875V42.3L25 47L45.8333 42.3V25.875H4.16667ZM12.5 30.575H16.6667V37.65H12.5V30.575ZM22.9167 30.575H27.0833V37.65H22.9167V30.575ZM33.3333 30.575H37.5V37.65H33.3333V30.575Z" fill="#214D76"/>
  </svg>
);

export const PlusIcon: React.FC = () => (
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);
