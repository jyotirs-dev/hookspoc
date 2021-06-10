import {memo, useState, useEffect, useRef, useContext} from 'react';
import FormSection from '../UI/Forms/FormSection';
import FormControl from '../UI/Forms/FormControl';
import FormAction from '../UI/Forms/FormAction';
import FormButton from '../UI/Forms/FormButton';
import {ThemeContext} from '../../contexts/ThemeContext';
import Card from '../UI/Card';

const UpdateIngredientForm = memo(props => {

	const {id, amount, title} = props.ingredientDetails; 
	const [activeTitle,setTitle] = useState("");
	const [activeAmount,setAmount] = useState("");
	const { theme } = useContext(ThemeContext);
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
		<FormSection themecolor={theme}>
		<Card>
			<form onSubmit={submitHandler}>
			<FormControl themecolor={theme}>
				<label htmlFor="title">Name</label>
				<input type="text" id="edittitle" value={activeTitle} ref ={editInputEl} onChange={(event)=> setTitle(event.target.value)}/>
			</FormControl>
			<FormControl themecolor={theme}>
				<label htmlFor="amount">Amount</label>
				<input type="number" id="editamount" value={activeAmount} onChange={(event)=> setAmount(event.target.value)}/>
			</FormControl>
			<FormAction>
				<FormButton themecolor={theme} type="submit">Update Ingredient</FormButton>
			</FormAction>
			</form>
		</Card>
		</FormSection>
	);
});

export default UpdateIngredientForm;
