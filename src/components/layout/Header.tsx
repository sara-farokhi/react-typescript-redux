import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header bg-dark text-white d-flex'>
           <Link to={"/"}> <span>About Project</span></Link> 
           <Link to={"/posts"}> <span className='mx-2'>Posts</span></Link>
        </div>
    )
}

export default Header
