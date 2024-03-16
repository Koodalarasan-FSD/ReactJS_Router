import { useState, createContext, useContext } from "react";

// React Router - Authentication and Protected Routes - https://www.youtube.com/watch?v=X8eAbu1RWZ4

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
