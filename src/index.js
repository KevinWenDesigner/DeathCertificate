import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 使用React 18的新API创建根
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 