# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 3000)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Install dependencies**: `npm install`

## Environment Setup

The project requires a `GEMINI_API_KEY` environment variable for AI functionality. This should be set in a `.env.local` file at the project root.

## Project Architecture

This is a React fintech dashboard application built with TypeScript and Vite. The architecture follows these patterns:

### Core Structure
- **Single Page Application**: Uses a central `App.tsx` with page routing state management rather than a router
- **Page-based Navigation**: All pages are in the `/pages` directory with a `Page` type enum for navigation
- **Component Library**: Reusable UI components in `/components` directory
- **Mock Data Pattern**: All data is mock data stored in `constants.ts` with TypeScript interfaces in `types.ts`

### Key Files
- `App.tsx`: Main application component handling page state and navigation
- `types.ts`: Core TypeScript interfaces for transactions, accounts, balances, etc.
- `constants.ts`: Mock data constants used throughout the application
- `components/Header.tsx`: Main navigation header with user dropdown

### Navigation Pattern
The app uses a custom navigation system via the `onNavigate` prop pattern:
- Pages receive `onNavigate: (page: Page) => void` props
- Navigation is handled through state in `App.tsx` 
- The `Page` type defines available routes: 'dashboard', 'wallet', 'virtual-accounts', 'kyc', etc.

### Component Architecture
- **Stateful Pages**: Complex page components in `/pages` directory
- **Reusable Components**: UI components like modals, tables, cards in `/components`
- **Props Pattern**: Components receive handler functions as props for state changes
- **Mock Data Integration**: Components consume data from `constants.ts` 

### Styling
- Uses Tailwind CSS for styling
- Custom CSS in `styles.css`
- Responsive design patterns throughout

### Key Business Logic
- **Transaction Management**: Handles deposits, payouts, transfers with status tracking
- **Virtual Account Management**: CRUD operations for virtual banking accounts  
- **KYC Workflow**: User verification status and document upload flows
- **Multi-currency Support**: USD/EUR wallet and transaction handling

### Data Flow
- Mock data from `constants.ts` flows through `App.tsx` state to child components
- Transaction and account operations update local state arrays
- No external API calls - purely mock data driven

This is designed as a fintech dashboard prototype/demo with realistic UI patterns but mock backend integration.