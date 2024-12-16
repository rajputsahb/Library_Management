import React, { useState } from 'react';
import axios from 'axios';

function IssueBook() {
    const [userId, setUserId] = useState('');
    const [bookId, setBookId] = useState('');

    const handleIssue = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/transactions/issue', { userId, bookId });
            alert('Book issued successfully!');
        } catch (error) {
            alert('Error issuing book:', error.message);
        }
    };

    return (
        <div>
            <h2>Issue Book</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Book ID"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
            />
            <button onClick={handleIssue}>Issue Book</button>
        </div>
    );
}

export default IssueBook;
