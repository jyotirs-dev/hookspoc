import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

function ThemeSwitcher() {
	const {theme,themeHandler } = useContext(ThemeContext)

	return (
		<button
			onClick={themeHandler}
			className={`button-switch ${theme}`}
		>
		</button>
	)
}

export default ThemeSwitcher