import React from "react";
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/LogoutPage.css';

const Logout = () => {
    const history = useHistory();

    const handleExit = () => {
        // Clear session storage
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');

        // Redirect the user to the landing page
        history.push('/');
    }

    return (
        <div className="logout-container">
            <h1 className="logout-heading">Click to Logout</h1>
            <button className="logout-button btn btn-warning btn-lg" onClick={handleExit}>Logout</button>
        </div>
    );
}

export default Logout;
