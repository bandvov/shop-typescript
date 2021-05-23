import styled from 'styled-components';

interface IDiv {
    background: string;
    width: string;
    minHeight: string;
}
export const Styleddiv = styled.div<IDiv>`
background: ${(props)=>props.background || props.theme.background};
width: ${props=>props.width || props.theme.width};
min-height: ${props=>props.minHeight||props.theme.minHeight};
`