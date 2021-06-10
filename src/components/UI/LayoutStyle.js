import styled from 'styled-components';

const LayoutStyle = styled.div`
	${(props) => `
     background-color: ${props.theme[`$primary-bg-${props.themecolor}`]};
	 color: ${props.theme[`$primary-color-${props.themecolor}`]};
  `};
`

export default LayoutStyle;
