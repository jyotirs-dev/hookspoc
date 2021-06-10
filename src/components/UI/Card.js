import { useContext } from "react";
import './Card.css';
import {ThemeContext} from "../../contexts/ThemeContext";

const Card = props => {
	const { theme } = useContext(ThemeContext);
	return(
		<div className={`card ${theme}`}>
			{props.children}
		</div>
	) 
};

export default Card;
