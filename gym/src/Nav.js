import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="https://gymitfitness.com/wp-content/uploads/2024/01/gymit-logo.png" alt='' />
                    <h1>AR Fitness</h1>
                </div>
                <div className="nav-item my-3">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Programs">Programs</Link></li>
                        <li><Link to="/Amenities">Amenities</Link></li>
                        <li><Link to="/Contact">Contact</Link></li> 
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav