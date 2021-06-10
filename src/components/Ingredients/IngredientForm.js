import {useState,useContext} from 'react';
import FormSection from '../UI/Forms/FormSection';
import FormControl from '../UI/Forms/FormControl';
import FormAction from '../UI/Forms/FormAction';
import FormButton from '../UI/Forms/FormButton';
import {ThemeContext} from '../../contexts/ThemeContext';
import Card from '../UI/Card';

const IngredientForm = props => {
	
	const [title,setTitle] = useState("");
	const [amount,setAmount] = useState("");
	const { theme } = useContext(ThemeContext);

	console.log("rendering ingrdient form")
	const submitHandler = event => {
		event.preventDefault();
		props.addIngredients(
			{title, amount}
		);
		setTitle("");
		setAmount("");
	};

	return (
		<FormSection>
			<Card themecolor={theme}>
				<form onSubmit={submitHandler}>
					<FormControl themecolor={theme}>
						<label htmlFor="title">Name</label>
						<input type="text" id="title" value={title} onChange={(event)=> setTitle(event.target.value)}/>
					</FormControl>
					<FormControl themecolor={theme}>
						<label htmlFor="amount">Amount</label>
						<input type="number" id="amount" value={amount} onChange={(event)=> setAmount(event.target.value)}/>
					</FormControl>
					<FormAction >
						<FormButton themecolor={theme} type="submit">Add Ingredient</FormButton>
					</FormAction>
				</form>
			</Card>
		</FormSection>
	);
};

export default IngredientForm;
