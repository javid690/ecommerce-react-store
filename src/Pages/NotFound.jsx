import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>OOPS!</h2>
            <h4>Page not found</h4>
            <p>Sorry, we couldn't find the page you where looking for. We suggest that you <br />return to home page.</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default NotFound