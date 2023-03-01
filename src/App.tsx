import React from 'react';
import './App.css';
import { Router } from './containers/Router';

const App: React.FC = () => {
    return (
        <div className="main">
            <div className="sub-main">
                <Router />
            </div>
        </div>
    );
}

export default App;
