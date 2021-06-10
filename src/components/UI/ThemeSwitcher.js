import {useContext} from 'react';
import SwitchButton from './ThemeSwitchButton';
import {ThemeContext} from '../../contexts/ThemeContext';

function ThemeSwitcher() {
	const {theme,themeHandler } = useContext(ThemeContext)

	return (
		<SwitchButton
			onClick={themeHandler}
			theme={theme}
		>
		</SwitchButton>
	)
}

export default ThemeSwitcher