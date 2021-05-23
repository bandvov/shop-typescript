import styled from 'styled-components';


export const Styleddiv = styled.div<IProps>`
background: ${(props)=>props.background || props.theme.background};
width: ${props=>props.width || props.theme.width};
min-height: ${props=>props.minHeight||props.theme.minHeight};
`