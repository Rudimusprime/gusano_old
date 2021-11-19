import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

const AdminPanel = () => {
    return (
        <Router>
            <div className="admin-panel">
                <label>
                    login
                    <input type="text"
                           placeholder="e-mail"/>
                </label>
                <label>
                    hasło
                    <input type="password"
                           placeholder="password"/>
                </label>
            </div>
        </Router>
    );
}

export default AdminPanel;