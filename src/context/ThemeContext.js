import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const useData = () => useContext(ThemeContext); 

const Provider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        //setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    const ThemeContextValues = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={ThemeContextValues}>
            {children}
        </ThemeContext.Provider>
    );
}


export default Provider;
export { useData };