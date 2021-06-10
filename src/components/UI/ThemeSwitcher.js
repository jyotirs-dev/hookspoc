import {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';

function ThemeSwitcher() {
	const {themeHandler } = useContext(ThemeContext)

	return (
		<button
			onClick={themeHandler}
			className="button-theme"
		>
				Switch Theme
		</button>
	)
}

export default ThemeSwitcher