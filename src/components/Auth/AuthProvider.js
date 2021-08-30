import { useState, useEffect, createContext } from "react";
import AuthService from '../../service/Authentication/AuthService';

export const AuthContext = createContext();

const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState();

    useEffect(function () {
        AuthService().then((responseAuth) => setUser(responseAuth));
    }, []);

    console.log(user);
    
    const contextValue = {
        user,
        login(){
            setUser(user);
        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        }
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </ AuthContext.Provider>
    );
};

export default AuthProvider;