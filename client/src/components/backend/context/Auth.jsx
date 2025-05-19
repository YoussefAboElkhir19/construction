import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const userInfo = localStorage.getItem('userInfo');

    // State Need to send  userinfo to all components
    const [user, setUser] = useState(userInfo);

    // function to login 
    const login = (user) => {
        setUser(user);
    }

    // function to logout 
    const logout = () => [
        localStorage.removeItem('userInfo'),
        setUser(null)
    ]
    return (
        // AuthContext.Provider is used to send data to all components
        // user login logout {{}}  3lshan dol objects
        <AuthContext.Provider
            value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}