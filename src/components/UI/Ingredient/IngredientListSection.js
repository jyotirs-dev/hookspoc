import styled from 'styled-components';

const IngredientListSection = styled.section`

	width: 30rem;
	max-width: 80%;
	margin: auto;


	& h2 {
		border-bottom: 3px solid #ccc;
		padding-bottom: 1rem;
	}
	
	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	& li {
		margin: 1rem 0;
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: space-between;
	}
	
	& li{
		${(props) => `
	 		box-shadow:  ${props.theme[`$border-${props.themecolor}`]};
  		`};
	}
`

export default IngredientListSection;