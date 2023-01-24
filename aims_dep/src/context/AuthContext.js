import { createContext, useState } from "react";
import { useEffect } from "react";
import Router from "next/router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = (access, refresh, user) => {
        setLoading(true);
        setIsLoggedIn(true);
        setAccessToken(access);
        setRefreshToken(refresh);
        setUser(user);
        // Save the tokens to localStorage
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        // save to local storage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", true);
        setLoading(false);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setAccessToken("");
        setRefreshToken("");
        setUser(null);
        // Clear the tokens from localStorage
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        localStorage.setItem("isLoggedIn", false);

        // redirect to home page
        Router.push("/");
    };

    // use effect to check if user is logged in
    useEffect(() => {
        const access = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");
        const user = JSON.parse(localStorage.getItem("user"));
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (access && refresh && user && isLoggedIn) {
            login(access, refresh, user);
        }
    }, []);

    //   const refreshAccessToken = async () => {
    //     const res = await fetch('', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${refreshToken}`
    //       }
    //     });
    //     const data = await res.json();
    //     const newAccessToken = data.access;
    //     setAccessToken(newAccessToken);
    //     // Save the new access token to localStorage
    //     localStorage.setItem('access_token', newAccessToken);
    //   };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                accessToken,
                refreshToken,
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
