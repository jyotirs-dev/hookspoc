import { useContext } from "react"
import Header from "./Header"
import { Helmet } from "react-helmet"
import {ThemeContext} from "../../contexts/ThemeContext";

const Layout = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const bg =
		theme === "dark"
			? "body {background-color: #000; color: #fff;}"
			: "body {background-color: #fff; color: #000;}"
	return (
		<div className={theme}>
			<Helmet>
				<style>{bg}</style>
			</Helmet>
			<Header />
				{children}
		</div>
	)
}

export default Layout;