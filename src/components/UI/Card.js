import styled from 'styled-components';

const Card = styled.div`
	.light &{
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
  
	.dark &{
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 8px rgb(255, 255, 255);
	}
`

export default Card;
