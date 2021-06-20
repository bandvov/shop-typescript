import React from 'react';
import DropdownMenu from '../dropdown/dropdown-menu';
import Elipsis from './elipsis';
import styled from 'styled-components';
import Div from './div';


const StyledMenu = styled(Div)`
height: 70px;
 box-shadow: ${(props) => props.theme.darkSmallOutShadow},
    ${(props) => props.theme.lightSmallOutShadow};
    margin: 0 0 1rem;

`;

const menuItems = [ 
    {url:'/hhhhh',title:'item1dasdasdasdasdasdas'},
    {url:'#',title:'item2'},
    {url:'#',title:'item3'},
    ];
function Menu() {
    return (
        <StyledMenu minHeight='40px'>
        <DropdownMenu title='Kitchen' >{menuItems}</DropdownMenu>            
        <DropdownMenu title='Bedroom'>{menuItems}</DropdownMenu>            
        <DropdownMenu title='Kids room'>{menuItems}</DropdownMenu>            
        <DropdownMenu title='Lieaving room'>{menuItems}</DropdownMenu>            
        <DropdownMenu title='Office furniture'>{menuItems}</DropdownMenu>            
        <DropdownMenu title='Action'>{menuItems}</DropdownMenu>            
        <DropdownMenu padding='1rem' title={<Elipsis vertical />} right>{menuItems}</DropdownMenu>            
    </StyledMenu>
    );
}

export default Menu;
