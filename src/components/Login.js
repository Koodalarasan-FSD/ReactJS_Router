import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from './Auth'

// https://www.youtube.com/watch?v=X8eAbu1RWZ4

export const Login = () => {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location=useLocation()

    const redirectpath=location.state?.path||'/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectpath,{replace:true})
    }
    return (
        <div>
            <label>
                User_Name:<input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
