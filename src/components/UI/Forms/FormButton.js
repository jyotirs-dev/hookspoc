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
	
	${(props) => `
     background-color: ${props.theme[`$switch-btn-${props.themecolor}`]};
	 color: ${props.theme[`$btn-color-${props.themecolor}`]};
	 border:  ${props.theme[`$btn-border-${props.themecolor}`]};
  `};
`

export default FormButton;