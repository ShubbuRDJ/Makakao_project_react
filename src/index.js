import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from './app/componetns/loader/Loader';

const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <Suspense fallback={
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
      <Loader dotsColor={'black'} />
    </div>
  }
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
      // basename="/"
      >
        <App />
      </BrowserRouter>
    </QueryClientProvider>

  </Suspense>

);
