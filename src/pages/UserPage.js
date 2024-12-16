import React from 'react';
import Navbar from '../components/Navbar';
import BookList from '../components/BookList';

function UserPage() {
    return (
        <div>
            <Navbar />
            <h1>User Dashboard</h1>
            <BookList />
        </div>
    );
}

export default UserPage;
