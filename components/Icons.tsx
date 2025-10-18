import React from 'react';

export const LogoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#214D76"/>
    <path d="M24 14L34 24L24 34L14 24L24 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DropdownArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WarningIconSmall = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="#FEE2E2"/>
    <path d="M8 5V9" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11.5C8.27614 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.27614 10.5 8 10.5C7.72386 10.5 7.5 10.7239 7.5 11C7.5 11.2761 7.72386 11.5 8 11.5Z" fill="#991B1B"/>
  </svg>
);

export const WarningIconLarge = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#FEE2E2" />
        <path d="M24 16V28" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 34.01L24.01 33.9989" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ArrowUpIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SendIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const RequestPageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15L12 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DepositIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H15.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 4H10C9.46957 4 8.96086 4.21071 8.58579 4.58579C8.21071 4.96086 8 5.46957 8 6V10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12H21C21.5304 12 22.0391 11.7893 22.4142 11.4142C22.7893 11.0391 23 10.5304 23 10V6C23 5.46957 22.7893 4.96086 22.4142 4.58579C22.0391 4.21071 21.5304 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const IdCardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 8H8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V12C44 9.79086 42.2091 8 40 8Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28H28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const LocationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10C29.5228 10 34 14.4772 34 20C34 28 24 40 24 40C24 40 14 28 14 20C14 14.4772 18.4772 10 24 10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BusinessIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 38V12C6 9.79086 7.79086 8 10 8H38C40.2091 8 42 9.79086 42 12V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 16H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 32H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 16H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 24H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 32H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CheckmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4.1665V15.8332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.16675 10H15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BankAccountIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 32H56" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16L32 5.33331L56 16" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.6667 37.3333V53.3333C10.6667 54.7838 11.2289 56.1764 12.2288 57.1763C13.2287 58.1762 14.6212 58.7383 16.0718 58.7383H47.9282C49.3788 58.7383 50.7713 58.1762 51.7712 57.1763C52.7711 56.1764 53.3333 54.7838 53.3333 53.3333V37.3333" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.6667 42.6667H21.3334" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29.3333 42.6667H34.6666" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.6667 42.6667H45.3334" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CopyIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 13.3333H15.8333C16.2754 13.3333 16.6993 13.1577 17.0118 12.8452C17.3244 12.5326 17.5 12.1087 17.5 11.6667V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H8.33333C7.89131 2.5 7.46738 2.67559 7.15482 2.98816C6.84226 3.30072 6.66667 3.72464 6.66667 4.16667V6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.3334 6.66667H4.16675C3.72472 6.66667 3.30081 6.84226 2.98825 7.15482C2.67568 7.46738 2.50008 7.89131 2.50008 8.33333V15.8333C2.50008 16.2754 2.67568 16.6993 2.98825 17.0118C3.30081 17.3244 3.72472 17.5 4.16675 17.5H11.6667C12.1088 17.5 12.5327 17.3244 12.8452 17.0118C13.1578 16.6993 13.3334 16.2754 13.3334 15.8333V8.33333C13.3334 7.89131 13.1578 7.46738 12.8452 7.15482C12.5327 6.84226 12.1088 6.66667 11.6667 6.66667H6.66675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const UsdIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" fill="#E0F2FE"/>
        <path d="M28 20V36" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 24C32 21.7909 30.2091 20 28 20C25.7909 20 24 21.7909 24 24C24 26.2091 25.7909 28 28 28C30.2091 28 32 29.7909 32 32C32 34.2091 30.2091 36 28 36C25.7909 36 24 34.2091 24 32" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const EurIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" fill="#E0E7FF"/>
        <path d="M35 22.6667C33.611 20.8258 31.4328 19.7431 29.0983 19.734C26.7638 19.7248 24.5941 20.7891 23.2222 22.625" stroke="#4338CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 26H31" stroke="#4338CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 30H31" stroke="#4338CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 33.3333C33.611 35.1742 31.4328 36.2569 29.0983 36.266C26.7638 36.2752 24.5941 35.2109 23.2222 33.375" stroke="#4338CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowBackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CopyOutlineIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 16C4 17.1046 4.89543 18 6 18H16V20C16 21.1046 15.1046 22 14 22H6C4.89543 22 4 21.1046 4 20V12C4 10.8954 4.89543 10 6 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);