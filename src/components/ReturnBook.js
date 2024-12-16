import React, { useState } from 'react';
import axios from 'axios';

function ReturnBook() {
    const [transactionId, setTransactionId] = useState('');

    const handleReturn = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/transactions/return', { transactionId });
            alert('Book returned successfully! Fine: ' + response.data.transaction.fineAmount);
        } catch (error) {
            alert('Error returning book:', error.message);
        }
    };

    return (
        <div>
            <h2>Return Book</h2>
            <input
                type="text"
                placeholder="Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
            />
            <button onClick={handleReturn}>Return Book</button>
        </div>
    );
}

export default ReturnBook;
