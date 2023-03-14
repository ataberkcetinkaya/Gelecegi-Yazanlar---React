import { createContext, useContext } from "react";

const ThemeContext = createContext();

const useData = () => useContext(ThemeContext); 


const ThemeContextValues = {
    light: 'light',
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