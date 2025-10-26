import React from 'react';
import '@/App.css';
import { Button } from '@/components/shadcn/ui/button';
import AppProviders from '@/context/AppProviders';

function App() {
  return (
    <React.Fragment>
      <AppProviders>
        <Button>Hello</Button>
      </AppProviders>
    </React.Fragment>
  );
}

export default App;
