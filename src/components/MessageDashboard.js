//  Similar texts from users with the same ID are highlighted together
//  Search functionality is semi-functional
//  New incoming messages from users are displayed in the message lists
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import './styling/AdminButton.css';

const MessageDashboard = () => {
    const history = useHistory();
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [adminResponse, setAdminResponse] = useState("");
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:4000');
        setSocket(newSocket);

        retrieveMessages();

        return () => newSocket.disconnect();
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('newMessage', (newMessage) => {
                setMessages(prevMessages => [...prevMessages, newMessage]);
            });
        }

        return () => {
            if (socket) {
                socket.off('newMessage');
            }
        };
    }, [socket]);

    const retrieveMessages = () => {
        const token = sessionStorage.getItem("access_token");

        axios.get('http://localhost:4000/Message/message', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            toast.success('Messages Displayed Successfully', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            setMessages(res.data);
        })
        .catch(err => {
            toast.error('An Error Occurred While Displaying the Messages.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        });
    };

    const handleMessageSelect = (message) => {
        setSelectedMessage(message);
    };

    const handleAdminResponseChange = (e) => {
        setAdminResponse(e.target.value);
    };

    const sendAdminResponse = () => {
        if (!socket) return;

        socket.emit('adminMessage', { message: adminResponse });
        setAdminResponse(""); 
        retrieveMessages(); 
    };

    const handleAdmin = () => {
        history.push('./DisplayData');
    }

    // Filter messages based on search query
    const filteredMessages = messages.filter(message => {
        return message.message_body.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Combine both initial messages and filtered messages
    const displayMessages = searchQuery ? filteredMessages : messages;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className='text-center mb-4'>AGENT DASHBOARD</h2>
                    {/* Search input */}
                    <input 
                        type="text" 
                        placeholder="Search messages..." 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        className="form-control mb-3" 
                    />
                    <div className="message-list">
                        {/* Display messages */}
                        {displayMessages.map((message, index) => (
                            <div 
                                key={message.id}
                                className={`message-item ${selectedMessage && selectedMessage.id === message.id ? 'active' : ''}`} 
                                onClick={() => handleMessageSelect(message)}
                            >
                                <div className="message-content">
                                    <strong>Chat with Customer {index + 1}</strong>
                                    <p>{message.message_body.length > 50 ? message.message_body.substring(0, 50) + '...' : message.message_body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    {selectedMessage && (
                        <div>
                            <h2>Chat with Customer</h2>
                            <div className="selected-message">
                                <p>{selectedMessage.message_body}</p>
                                <textarea 
                                    className="form-control mb-2" 
                                    placeholder="Type your response..." 
                                    value={adminResponse} 
                                    onChange={handleAdminResponseChange} 
                                />
                                <button className="btn btn-primary" onClick={sendAdminResponse}>Send Response</button>
                            </div>

                            <div className="admin-container">
                                <h1 className="admin-heading">Click to proceed to Admin Dashboard</h1>
                                <button className="admin-button btn btn-warning btn-lg" onClick={handleAdmin}>Admin</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MessageDashboard;




