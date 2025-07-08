import { createContext, useState, useEffect } from "react";
import { supabase } from "../services/supabase";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("AUTH_USER");
        return stored ? JSON.parse(stored) : null;
    });

    const login = async (data, setError) => {
        const { user: username, password } = data;

        const { data: users, error } = await supabase
            .from("login")
            .select("*")
            .eq("user", username)
            .eq("password", password)
            .single(); // para traer solo 1

        if (error || !users) {
            setError("Credenciales inválidas");
            return null;
        }

        localStorage.setItem("AUTH_USER", JSON.stringify(users));
        setUser(users);
        return users; // contiene el role si lo agregas luego
    };

    const logout = () => {
        localStorage.removeItem("AUTH_USER");
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout, isAuth: !!user }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
