import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard, Layout } from './components';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Dashboard />
      </Layout>
    </BrowserRouter>
  );
};
