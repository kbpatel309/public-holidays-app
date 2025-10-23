import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'papercss/dist/paper.min.css';

// Create a single QueryClient instance (manage all queries)
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Wrap the app with QueryClientProvider so React Query can be used anywhere
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);


