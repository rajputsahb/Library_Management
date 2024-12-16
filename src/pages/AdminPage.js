import React from 'react';
import Navbar from '../components/Navbar';
import BookList from '../components/BookList';
import Transactions from '../components/Transactions';

function AdminPage() {
    return (
        <div>
            <Navbar />
            <h1>Admin Dashboard</h1>
            <BookList />
            <Transactions />
        </div>
    );
}

export default AdminPage;
