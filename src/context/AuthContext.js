import React, { useContext, useEffect, useState } from "react"

import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)
    const login = (email, password) => auth.signInWithEmailAndPassword(email, password)
    const logout = () => auth.signOut()

    useEffect(() => {
        return auth.onAuthStateChanged((user) => setCurrentUser(user))
    }, [])

    const value = { currentUser, signup, login, logout }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
