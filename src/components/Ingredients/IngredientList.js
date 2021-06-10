import {useContext} from 'react';
import IngredientListSection from '../UI/Ingredient/IngredientListSection';
import {ThemeContext} from '../../contexts/ThemeContext';

const IngredientList = props => {
	const { theme } = useContext(ThemeContext);
	console.log("rendering ingrdient list")
	return (
		<IngredientListSection themecolor={theme}>
			<h2>Loaded Ingredients</h2>
			<ul>
				{props.ingredients.map(ig => (
					<li key={ig.id}>
						<span>{ig.title}</span>
						<span>{ig.amount}x</span>
						<span onClick={props.onEditItem.bind(this, ig)}>edit</span>
						<span onClick={props.onRemoveItem.bind(this, ig.id)}>X</span>
					</li>
				))}
			</ul>
		</IngredientListSection>
	);
};

export default IngredientList;
