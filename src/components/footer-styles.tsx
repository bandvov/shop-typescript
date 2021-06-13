import styled from 'styled-components';
import { BREAKPOINT_LG, BREAKPOINT_XL } from './../configs/constants';

export const Box = styled.div`
  padding: 20px 6rem;
  background: black;  
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: ${BREAKPOINT_XL}px;
    margin: 0 auto;
    @media (max-width: ${BREAKPOINT_LG}px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;    
    width: 100%;
    @media (max-width: ${BREAKPOINT_LG}px) {
        margin-left: 0;
    }
`;

export const Row = styled.div<IProps>`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: ${({right})=>right?'flex-end':''};
    color:${(props)=>props.color};
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

