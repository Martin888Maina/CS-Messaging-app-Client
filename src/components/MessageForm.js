import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = ({ fetchMessages }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleMessageSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/messages', {
                text: newMessage,
                sender: 'User', // Hardcoded sender for now
            });
            setNewMessage('');
            fetchMessages(); // Fetch messages again to update the list
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <form onSubmit={handleMessageSubmit}>
            <input
                type="text"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;
