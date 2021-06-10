import { useState, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import UpdateIngredientForm from './UpdateIngredientForm';

function Ingredients() {
	const [userIngredients,setUserIngredients] = useState([]);
	const [activeIngredients,setActiveIngredients] = useState({amount:"",title:""});
	const [toggleFormVisibility,setToggleFormVisibility] = useState(false);

	const addIngredients = useCallback(ingredient => {
		setUserIngredients(prevIngredient=> [
			...prevIngredient, 
			{ id: Math.random().toString(),  ...ingredient}
		]);
	},[]);

	const removeIngredients = useCallback(removeId => {
		const updatedIngredients = userIngredients.filter(ingredient =>
			ingredient.id !== removeId
			);
		setUserIngredients(updatedIngredients);
	},[userIngredients]);

	const updateIngredientsLoad = useCallback((activeIngredient) => {
		setActiveIngredients(activeIngredient);
		setToggleFormVisibility(true);
	},[]);

	const updateIngredientsSave = (updateId,updatedIngredient) => {
		const updatedIngredients = userIngredients.map(ingredient => {
			if(ingredient.id === updateId)
				 return {
					 ...ingredient,
					 ...updatedIngredient
				 }
			return ingredient
		});
		setUserIngredients(updatedIngredients);
		setToggleFormVisibility(false);
	};

	const ingredientForm = useMemo(()=>
	{
		return (
			<IngredientForm addIngredients={addIngredients}/>
		)
	}
	,[addIngredients])

	const ingredientList = useMemo(()=>
	{
		return (
			<IngredientList 
				ingredients={userIngredients} 
				onRemoveItem={removeIngredients}
				onEditItem={updateIngredientsLoad}
			/>
		)
	}
	,[userIngredients,removeIngredients,updateIngredientsLoad])

	return (
		<div className="App">
			{!toggleFormVisibility && ingredientForm}
			{toggleFormVisibility && <UpdateIngredientForm ingredientDetails={activeIngredients} updateIngredients={updateIngredientsSave}/>}
			<section>
			{ingredientList}
			</section>
		</div>
	);
}

export default Ingredients;
