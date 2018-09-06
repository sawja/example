import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

export default (props) => {
    return (
        <div class="component-navbar">
            <Link to="/home">Blog app</Link>
            <ul class="nav-list">
                <li class="nav-list__item">
                    <Link to="/posts">Posts</Link>
                    <button>12</button>
                </li>
            </ul>
        </div>
    )
}
