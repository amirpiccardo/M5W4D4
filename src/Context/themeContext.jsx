import { createContext, useState } from "react";



export const ThemeContext = createContext()


export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('ligth');

    const toggleTheme = () => {
        theme === 'ligth' ? setTheme('dark') : setTheme('ligth')
    }

    const contextValue = {
        theme: theme,
        toggleTheme: toggleTheme
    }

    return(
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}
