import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useData = () => useContext(ThemeContext); 


const ThemeContextValues = {
    white: 'light',
}

const Provider = ({ children }) => {
    return (
        <ThemeContext.Provider value={ThemeContextValues}>
            {children}
        </ThemeContext.Provider>
    );
}


export default Provider;
export { useData };