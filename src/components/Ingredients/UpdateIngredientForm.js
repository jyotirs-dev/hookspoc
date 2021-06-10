import {memo, useState,useEffect,useRef} from 'react';
import FormSection from '../UI/Forms/FormSection';
import FormControl from '../UI/Forms/FormControl';
import FormAction from '../UI/Forms/FormAction';
import FormButton from '../UI/Forms/FormButton';
import Card from '../UI/Card';

const UpdateIngredientForm = memo(props => {

	const {id, amount, title} = props.ingredientDetails; 
	const [activeTitle,setTitle] = useState("");
	const [activeAmount,setAmount] = useState("");
	const editInputEl = useRef(null);

	useEffect(() => {
		setTitle(title);
		setAmount(amount);
		editInputEl.current.focus();
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
				<input type="text" id="edittitle" value={activeTitle} ref ={editInputEl} onChange={(event)=> setTitle(event.target.value)}/>
			</FormControl>
			<FormControl>
				<label htmlFor="amount">Amount</label>
				<input type="number" id="editamount" value={activeAmount} onChange={(event)=> setAmount(event.target.value)}/>
			</FormControl>
			<FormAction>
				<FormButton type="submit">Update Ingredient</FormButton>
			</FormAction>
			</form>
		</Card>
		</FormSection>
	);
});

export default UpdateIngredientForm;
