import './IngredientList.css';

const IngredientList = props => {
	console.log("rendering ingrdient list")
	return (
		<section className="ingredient-list">
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
		</section>
	);
};

export default IngredientList;
