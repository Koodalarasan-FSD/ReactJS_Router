import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// React Router - Nested Routes - https://www.youtube.com/watch?v=WNScOybyOhg
// React Router - Relative Links - https://www.youtube.com/watch?v=EoOyAoLnoUw
export const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='Search Products' />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
                <Outlet/>   
            </nav>
        </>
    )
}
