import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';
import { StoreProvider } from './state/StoreProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StoreProvider>
        <App />
        </StoreProvider>
    </React.StrictMode>
);


