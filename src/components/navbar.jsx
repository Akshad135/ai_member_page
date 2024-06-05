import React from 'react'
import clubLogo from '../assets/clublogo.png'
import './navbar.css'
const navbar = () => {
    return (
        <div className="navwrap">
            <div className='navbar'>
                <div className="dotts"></div>
                <div className="navmain">
                    <img id='navLogo' src={clubLogo} alt="" />
                    <p className='nextPage navElements'>Home</p>
                    <p className='nextPage navElements'>Events</p>
                    <p className='nextPage navElements'>Projects</p>
                    <p className='nextPage navElements'>Members</p>
                    <p className='nextPage navElements'>Gallery</p>
                </div>
            </div>
        </div>
    )
}

export default navbar
