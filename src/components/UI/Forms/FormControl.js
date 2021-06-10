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
		${(props) => `
				background: ${props.theme[`$primary-bg-${props.themecolor}`]};
				color: ${props.theme[`$primary-color-${props.themecolor}`]};
				border-bottom: ${props.theme[`$input-border-${props.themecolor}`]};
			`};
	}

	& input:focus{
		outline: none;
		${(props) => `
				background: ${props.theme[`$primary-bg-${props.themecolor}`]};
				color: ${props.theme[`$primary-color-${props.themecolor}`]};
				border-bottom-color: ${props.theme[`$switch-btn-${props.themecolor}`]};
			`};
	}
`

export default FormControl;