import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling/ForgotPassword.css'; 

const ForgotPassword = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    axios
      .post(
        'http://localhost:4000/Forgot/forgot-password',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        toast.success('Password reset email sent successfully.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        history.push('./PasswordReset');
      })
      .catch((err) => {
        toast.error('Error sending password reset email.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        console.error('Error sending password reset email:', err);
      });
  };

  return (
    <div className="forgot-password-container">
      <h2 className="text-info mt-5 mb-5">Forgot Password</h2>
      <Form onSubmit={handleResetPassword} className="forgot-password-form">
        <Form.Group className="mb-3">
          <Form.Control type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Reset Password
        </Button>

        <div className="link-section mt-5">
          <p>Want to head back to the Login?</p>
          <Link to="./LoginForm" className="forgot-login">
            Proceed to Login page
          </Link>
        </div>

        <div className="link-section mt-5">
          <p>Want to proceed to the Password Reset Page?</p>
          <Link to="./PasswordReset" className="password-reset">
            Proceed to Password Reset page
          </Link>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;


