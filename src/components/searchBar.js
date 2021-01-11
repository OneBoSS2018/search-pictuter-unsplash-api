import React from 'react'
import './searchBar.css'
import v from '../assets/myVideo.mp4'
import {Link} from "react-router-dom";


function SearchBar() {
    return (
        <div className='main'>
            <div className='nav'>
                    <div className='logo'>
                        <Link to="/">funpicures.com</Link>
                    </div>
                    <div className='nav-items'>
                        <ul>
                            <li>
                                <Link to='#'>About</Link>
                            </li>
                            <li className='search'>
                                <Link to='/gallary'>
                                    Search
                                </Link>
                            </li>
                            <li>
                                <Link to='#'>Contact us</Link>
                            </li>
                        </ul>

                    </div>

            </div>
            <div className='videoDiv'>
                <video src={v} autoPlay  muted loop />
                <h2>Welcome !</h2>
                <p>U want search images? Just do it!</p>
                <Link to='/gallary'>ok</Link>
            </div>
            <footer>
            <div className='me'>
               <h5>© MK 2020</h5>
            </div>
                <div className='icons'>
                    <a href="https://www.facebook.com/profile.php?id=100010356486001"  rel="noreferrer" target='_blank'><img alt='' src="https://img.icons8.com/nolan/64/facebook-new.png"/></a>
                    <a href="https://www.linkedin.com/in/mike-kichkovskiy-46587317b/"  rel="noreferrer" target='_blank'><img alt='' src="https://img.icons8.com/nolan/64/linkedin.png"/></a>
                    <a href="https://www.instagram.com/m.kichkovskiy/" target='_blank'  rel="noreferrer" ><img alt='' src="https://img.icons8.com/nolan/64/instagram-new.png"/></a>
                </div>
            </footer>
        </div>

    )
}

export default SearchBar