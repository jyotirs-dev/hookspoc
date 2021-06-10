import {createContext, useState} from "react"

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
})

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState("light");
  const themeHandler = ()=>{
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const value = { theme, themeHandler };

  return (
  <ThemeContext.Provider value={value}>
      {props.children}
  </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;