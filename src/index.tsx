import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <div className="h-screen p-8 bg-gray-200">
            <App/>
        </div>
    </React.StrictMode>,
)
