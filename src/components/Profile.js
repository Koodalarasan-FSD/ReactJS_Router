import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './Auth'

// React Router - Authentication and Protected Routes - https://www.youtube.com/watch?v=X8eAbu1RWZ4

export const Profile = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div>
            Welcome {auth.user}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
