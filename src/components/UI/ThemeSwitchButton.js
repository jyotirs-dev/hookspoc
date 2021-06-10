import styled from 'styled-components';

const SwitchButton = styled.button`
	font: inherit;
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 50%;
	cursor: pointer;
	background: ${props=> props.theme ==='dark'? '#f0f0f0':'#ff2058'};
`

export default SwitchButton;