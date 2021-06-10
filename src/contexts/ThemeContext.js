import {createContext, useState} from "react"
import BootstrapProvider from '@bootstrap-styled/provider';

export const ThemeContext = createContext({
	theme: "light",
	setTheme: () => {},
})

const ThemeContextProvider = props => {

	const MyTheme = {
		'$primary-bg-light': '#fff',
		'$primary-bg-dark': '#000',
		'$primary-color-light': '#000',
		'$primary-color-dark': '#fff',
		'$btn-color-dark': '#000',
		'$btn-color-light': '#fff',
		'$switch-btn-light': '#ff2058',
		'$switch-btn-dark' : '#f0f0f0',
		'$btn-border-dark': '1px solid #f0f0f0',
		'$btn-border-light': '1px solid #ff2058',
		'$border-dark': '0 1px 4px #f0f0f0',
		'$border-light': '0 1px 4px rgba(0, 0, 0, 0.26)',
		'$input-border-dark': '2px solid #fff;',
		'$input-border-light': '2px solid #ccc'
	};

	const [theme, setTheme] = useState("light");

	const themeHandler = ()=>{
		setTheme(theme === "dark" ? "light" : "dark");
	}
	const value = { theme, themeHandler };

	return (
		<ThemeContext.Provider value={value}>
			<BootstrapProvider theme={MyTheme}>
				{props.children}
			</BootstrapProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;