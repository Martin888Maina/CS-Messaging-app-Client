import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container text-center">
                <h1 className="mt-5 mb-5 landing-heading">Welcome to the Customer Service Portal</h1>

                <div className="action-buttons">
                    <div className="mb-5">
                        <p className="landing-text">Proceed to the Registration Form?</p>
                        <Link to="./RegisterForm" className="btn btn-primary mr-3 action-button">
                            Register an Account
                        </Link>
                    </div>

                    <div className="mb-5">
                        <p className="landing-text">Proceed to the Login Form?</p>
                        <Link to="./LoginForm" className="btn btn-primary mr-3 action-button">
                            Login into Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
