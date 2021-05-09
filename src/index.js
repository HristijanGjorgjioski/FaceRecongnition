import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import './index.css';

import App from './App';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);
