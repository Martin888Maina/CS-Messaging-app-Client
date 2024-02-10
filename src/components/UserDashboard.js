import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserDashboard = () => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        const token = sessionStorage.getItem("access_token");
    
        // Generate timestamp
        const timeStamp = new Date().toISOString();
        console.log('Generated timestamp:', timeStamp);
    
        axios.post('http://localhost:4000/Message/addMessage', {
            timeStamp: timeStamp, // Pass the generated timestamp
            message_body: message,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            toast.success('Message sent successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            setMessage(''); // Clear the message input field after successful submission
        })
        .catch(err => {
            toast.error('Error sending message', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });
    };
    

    return (
        <div className="container user-dashboard">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className='text-center mb-4'>User Dashboard</h2>
                    <div className="message-form">
                        <textarea 
                            className="form-control mb-2" 
                            placeholder="Type your message..." 
                            value={message} 
                            onChange={handleMessageChange} 
                        />
                        <button className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UserDashboard;
