import styled from 'styled-components';

const FormControl = styled.div`
	& label,
	& input {
	display: block;
	width: 100%;
	}

	& input {
	font: inherit;
	padding: 0.1rem 0.25rem;
	border: none;
	margin-bottom: 1rem;
	}

	.dark & input{
		background: #000;
		color: #fff;
		border-bottom: 2px solid #fff;
	}

	.light & input{
		border-bottom: 2px solid #ccc;
	}

	.dark & input:focus{
		background: #000;
		color: #fff;
		outline: none;
		border-bottom-color: #f0f0f0;
	}

	.light & input:focus{
		outline: none;
		border-bottom-color: #ff2058;
	}
`

export default FormControl;