import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar-container">
            <img className='navbar-background' src="https://png.pngtree.com/png-clipart/20230222/ourmid/pngtree-macbook-pro-16-png-image_6614408.png" alt="Background" />

            <img src="https://t4.ftcdn.net/jpg/03/06/02/03/360_F_306020335_K9S5mdSoq8uWfnWQenTzvncATheULHOW.jpg" alt="Icon" className="navbar-image" />
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                        <p className="logo">BEAT'S</p>
                        <input className="form-control me-2" value={props.keyword} onChange={(e) => {props.setkeyword(e.target.value)}} type="search" placeholder="Search Your Favourite Songs" aria-label="Search"></input>
                        <button className="btn btn-outline-success" onClick={props.getTracks}>Search</button>
                </div>
                <div className="main">
                    <div className='subheading'>
                        <p className='para1'>THE LYRICS REVOLVE AROUND LOVE</p>
                        <p className='para2'>I N F L U E N C E S &nbsp; O F</p>
                        <p className='para3'>CLASSIC ROCK</p>
                        <img src="https://i.ibb.co/ws5FpkN/pngwing-com-2.png" alt="" className='png'/>
                    </div>
                    <div className="social-media">
                        <a href="https://linkedin.com/in/adityapandey06" className='links'><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt=""  
                        className='linkedin rotate2'/></a>
                        <a href="https://github.com/Aditya06pandey1368" className='links'><img src="https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg" alt=""  className='linkedin rotate2'/></a>
                        <p className='rotate1'>|</p>
                        <p className='rotate1'>|</p>
                        <p className='rotate'>T</p>
                        <p className='rotate'>C</p>
                        <p className='rotate'>E</p>
                        <p className='rotate'>N</p>
                        <p className='rotate'>N</p>
                        <p className='rotate'>O</p>
                        <p className='rotate'>C</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
