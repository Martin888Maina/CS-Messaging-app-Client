import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/LoginForm.css';

const LoginForm = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const submitLogin = (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("access_token");

        if (!data.email.trim() || !data.password.trim()) {
            toast.error("Please fill out all fields.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            return;
        }

        if (!isValidEmail(data.email)) {
            toast.error("The entered email is not valid.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            return;
        }

        axios.post('http://localhost:4000/Register/login', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (res.status === 200) {
                const { accessToken, refreshToken, role } = res.data;

                sessionStorage.setItem('access_token',  accessToken);
                sessionStorage.setItem('refresh_token', refreshToken);

                if (role === 'admin') {
                    history.push('./MessageDashboard'); // Redirect to message dashboard
                } else if (role === 'user') {
                    history.push('./UserDashboard'); // Redirect to user dashboard
                } else {
                    console.error('Unexpected user role:', role);
                }

                toast.success('User Login successful', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });

                setData({
                    email:"",
                    password:"" 
                });
            }
        })
        .catch(err => {
            console.error('Error occurred while logging in:', err);

            toast.error('An Error occurred while Logging in.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });
    };

    return(
        <div className="login-container">
            <h2 className="text-info mt-5 mb-5">LOGIN FORM</h2>
            <Form onSubmit={submitLogin} className="login-form">
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="email" value={data.email} onChange={handleChange} placeholder="Email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required/>
                </Form.Group>

                <Button variant="success" type="submit">Login</Button>

                <div className="mt-3">
                    <Link to="./ForgotPassword" className="forgot-password">
                        Forgot your password?
                    </Link>   
                </div>
            </Form>

            <div className="register-section mt-5">
                <p>Not Registered?</p>
                <Link to="./RegisterForm" className="register-link">Register an Account</Link>
            </div>

            <ToastContainer/>
        </div>
    );
};

export default LoginForm;

