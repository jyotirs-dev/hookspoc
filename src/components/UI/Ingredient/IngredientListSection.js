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
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.26);
		display: flex;
		justify-content: space-between;
	}
  
`

export default IngredientListSection;