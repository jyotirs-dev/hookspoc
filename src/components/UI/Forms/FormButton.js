import styled from 'styled-components';

const FormButton = styled.button`

	font: inherit;
	padding: 0.5rem 2rem;
	margin: 0.5rem 0;
	border-radius: 5px;
	cursor: pointer;
  
	&:hover,
	&:active {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
	}
	
	&:focus {
		outline: none;
	}

	.light &{
		background: #ff2058;
		color: white;
		border: 1px solid #ff2058;
	}
	  
	.dark &{
		background: #f0f0f0;
		color: black;
		border: 1px solid #f0f0f0;
	}
  
`

export default FormButton;