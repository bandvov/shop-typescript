import React from 'react';
import Div from './common/div';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenuItem = styled(Div)`
position: relative;
:hover{
    color:white;
    background: rgba(36, 84, 98, 1);
}
div {
    background-color: ${(props)=>props.theme.background.primary || 'white'};
    width: 100%;
    outline:0.5px solid black ;
    position: absolute;   
    color: black;
    display: none;
    z-index:2;
}
div a {
    text-decoration: none;
    padding: 1rem;
    color: black;
}
a:hover {
    background: rgba(36, 84, 98, .1);
    color: color;    
}

:hover div {
        display: flex;
        flex-direction: column;
    }
`;

function MenuItem({title,children}:{title:string,children:{name:string; url:string}[]}):React.ReactElement {

    const mappedChildren = children.map(item=>{
        return <Link key={item.name} to={item.url}>
                  {item.name}
               </Link>;
            });

    return (
        <StyledMenuItem width='100%'>
            {title}
            <div style={{ top: '70px'}}>
                {mappedChildren}</div>
        </StyledMenuItem>
    );
}

export default MenuItem;
