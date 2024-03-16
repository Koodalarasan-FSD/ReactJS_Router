import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router'

// React Router - Authentication and Protected Routes -  https://www.youtube.com/watch?v=X8eAbu1RWZ4

export const RequiredAuth = ({children}) => {

    const location=useLocation()
    const auth=useAuth()

    if(!auth.user)
    {
        return<Navigate to='/login' state={{path:location.pathname}} />
    }
    return children
}
