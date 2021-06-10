import { useContext } from 'react';
import NavHeader from './NavHeader';
import { Helmet } from 'react-helmet';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutStyle from '../UI/LayoutStyle';
import {ThemeContext} from '../../contexts/ThemeContext';

const Layout = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const bg =
		theme === "dark"
			? "body {background-color: #000; color: #fff;}"
			: "body {background-color: #fff; color: #000;}"
	return (
		<LayoutStyle themecolor={theme}>
			<Helmet>
				<style>{bg}</style>
			</Helmet>
			<NavHeader>
				<ThemeSwitcher />
			</NavHeader>
				{children}
		</LayoutStyle>
	)
}

export default Layout;