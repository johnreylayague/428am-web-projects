import React from 'react';
import '@/App.css';
import AppProviders from '@/context/AppProviders';
import Routes from '@/routes/Routes';

function App() {
  return (
    <React.Fragment>
      <AppProviders>
        <Routes />
      </AppProviders>
    </React.Fragment>
  );
}

export default App;
