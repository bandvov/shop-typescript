import React from 'react';
import Div from './div';
import styled from 'styled-components';

export const ElipsisContent = styled.div`
    background-color: black;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: .2rem;
`;
 
function Elipsis({vertical}:{vertical?:boolean}):React.ReactElement {
    return (
        <Div direction={vertical?'column':'row'}>
            <ElipsisContent />
            <ElipsisContent />
            <ElipsisContent />        
        </Div>
    );
}

export default Elipsis;
