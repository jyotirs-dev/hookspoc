import styled from 'styled-components';

const SwitchButton = styled.button`
	font: inherit;
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 50%;
	cursor: pointer;
	${(props) => `
     background-color: ${props.theme[`$switch-btn-${props.themecolor}`]};
  `};
`

export default SwitchButton;