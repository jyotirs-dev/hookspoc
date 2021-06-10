import {memo, useState,useEffect} from 'react';
import FormSection from '../UI/Forms/FormSection';
import FormControl from '../UI/Forms/FormControl';
import FormAction from '../UI/Forms/FormAction';
import Card from '../UI/Card';

const UpdateIngredientForm = memo(props => {

	const {id, amount, title} = props.ingredientDetails; 
	const [activeTitle,setTitle] = useState("");
	const [activeAmount,setAmount] = useState("");


	useEffect(() => {
		setTitle(title);
		setAmount(amount);
	}, [amount, title])

	const submitHandler = event => {
		event.preventDefault();
		props.updateIngredients(
			id,
			{title:activeTitle, amount:activeAmount}
		);
	};

	return (
		<FormSection>
		<Card>
			<form onSubmit={submitHandler}>
			<FormControl>
				<label htmlFor="title">Name</label>
				<input type="text" id="edittitle" value={activeTitle} onChange={(event)=> setTitle(event.target.value)}/>
			</FormControl>
			<FormControl>
				<label htmlFor="amount">Amount</label>
				<input type="number" id="editamount" value={activeAmount} onChange={(event)=> setAmount(event.target.value)}/>
			</FormControl>
			<FormAction>
				<button type="submit">Update Ingredient</button>
			</FormAction>
			</form>
		</Card>
		</FormSection>
	);
});

export default UpdateIngredientForm;
