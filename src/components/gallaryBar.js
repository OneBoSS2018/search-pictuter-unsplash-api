import React, {useState} from 'react'
import './gallaryBar.css'
import imageA from '../assets/thijs-kennis-ZYWWCmOQczE-unsplash.jpg'
import {Link} from "react-router-dom";
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

//SbfLpBanNm_Bw-Rm3H7G3QezpmyqQR7QEVpLBmYrUD4

function GallaryBar() {
    const keyApi = 'SbfLpBanNm_Bw-Rm3H7G3QezpmyqQR7QEVpLBmYrUD4'
    const [query, setQuery] = useState('')
    const [pictures, setPictures] = useState([])
    const fetchPct = () => fetch(`https://api.unsplash.com/search/photos?client_id=${keyApi}&query=${query}&orientation=squarish&per_page=20`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPictures(res.results)
        })
    return (
            <div className='container'>
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
            <div className='MainI'>
                <div className='MainA'>
                    <img src={imageA} alt=''/>
                    <div>
                        <input
                            type='text'
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            placeholder='Search photos'
                        />
                        <button type='submit' onClick={ () => fetchPct()} ><svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  width="24px" height="24px"><path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"/></svg></button>
                    </div>

                </div>
            </div>
                <div className='query'>
                    {
                        (pictures.length > 0) ? (<h1>{query}</h1>) : ('')
                    }

                </div>
            <div className='outPutI'>

                {(pictures.length > 0) ? (pictures.map(p =>
                    <div className='imgM'>
                        <img  src={p.urls.small} alt=''/>
                    </div>
                )): (
                    <div className='ife'>
                        <p>Enter</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  width="24px" height="24px"><path d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070313 15.324219 18.789063 15.722656 19.1875 L 20.25 23.714844 C 20.820313 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820313 23.714844 20.25 L 19.191406 15.722656 C 18.789063 15.324219 18.070313 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195313 3.804688 17 8.5 17 C 13.195313 17 17 13.195313 17 8.5 C 17 3.804688 13.195313 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z"/></svg>
                    </div>)}
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

export default GallaryBar