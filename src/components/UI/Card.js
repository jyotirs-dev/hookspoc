import styled from 'styled-components';

const Card = styled.div`
	padding: 1rem;
	border-radius: 5px;
	${(props) => `
		box-shadow:  ${props.theme[`$border-${props.themecolor}`]};
	`};
`

export default Card;
