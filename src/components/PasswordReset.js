import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling/PasswordReset.css';

const PasswordReset = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4000/Reset/password-reset',
        { email, newPassword },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Password reset successful.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        history.push('./LoginForm');
      } else {
        console.error('Password reset failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Error resetting password. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Password Reset</h2>
      <Form onSubmit={handleResetPassword} className="password-reset-form">
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter your new password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Reset Password
        </Button>

        <div className="link-section mt-5">
          <p>Want to head back to the Login?</p>
          <Link to="./LoginForm" className="login-page">
            Proceed to Login page
          </Link>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default PasswordReset;
