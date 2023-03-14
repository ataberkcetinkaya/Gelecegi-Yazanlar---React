import { createContext } from "react";

const ThemeContext = createContext();

const Provider = ({ children }) => {
    return (
        <ThemeContext.Provider value="light">
            {children}
        </ThemeContext.Provider>
    );
}

export default Provider;