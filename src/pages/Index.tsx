import React from 'react';
// import AppLayout from '@/components/AppLayout';
import Waitlist from '@/components/Waitlist';
import { AppProvider } from '@/contexts/AppContext';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <Waitlist />
    </AppProvider>
  );
};

export default Index;
