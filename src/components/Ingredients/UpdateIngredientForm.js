import {memo, useState,useEffect} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

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
        <section className="ingredient-form">
        <Card>
            <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="title">Name</label>
                <input type="text" id="edittitle" value={activeTitle} onChange={(event)=> setTitle(event.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="editamount" value={activeAmount} onChange={(event)=> setAmount(event.target.value)}/>
            </div>
            <div className="ingredient-form__actions">
                <button type="submit">Update Ingredient</button>
            </div>
            </form>
        </Card>
        </section>
    );
});

export default UpdateIngredientForm;
