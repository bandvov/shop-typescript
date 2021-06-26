import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
    text-decoration: none;
    color: black;
:hover{
    background: rgba(36, 84, 98, 1);
    color: white;
}`;

function BurgerMenuItem({
    title,
    url}: {
    title:string,
    url:string
}):React.ReactElement {
    return (
     
            <CustomLink style={{width:'auto',padding:'0.5rem 1rem'}} to={url}>                        
                {title}                       
            </CustomLink>
        
       
    );
}

export default BurgerMenuItem;
