import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/user">User</a></li>
                <li><a href="/reports">Reports</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
