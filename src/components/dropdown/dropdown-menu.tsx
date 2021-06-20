import Div from '../common/div';
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = styled.div`
    width: 100%;
    position: relative;
    display: inline-block;
&:hover {
    background: rgba(36, 84, 98, 1);
    display: block;
  > div {
    color: white;
    display: block;
  }
  > div img {
    fill: white;
  }
  > div div div {
    background-color: white;
  }
}
`;
export const DropdownContent = styled.div<IProps>`
display: none;
right:${(props)=> props.right ? 0 : ''} ;
position: absolute;
background-color: ${(props)=> props.theme.background.primary};
min-width: 100px;
box-shadow: 8px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
a {
    text-decoration: none;
}
a:hover div {
    background: rgba(36, 84, 98, .2);
}

`;
interface Dropdownchild {
    url:string;
    title:string;

}
function DropdownMenu({children = [],right, title,padding='1.2rem 3rem'}:{
    right?:boolean;
    padding?: string
    children:Dropdownchild[];
    title?: string | React.ReactChild;
}):React.ReactElement {
    return (
        <Div justify='space-between'>                  
            <Dropdown>
                <Div            
                minHeight='100%'
                padding={padding}>                       
                    {title}                       
                </Div>
                <DropdownContent right={right}>{
                    children.map(item=>{
                    return <Link key={item.title} to={item.url}>
                                <Div padding='0.5rem 1rem'>
                                    {item.title}
                                </Div>
                            </Link>;
                        })
                    }                    
                </DropdownContent>
            </Dropdown>
         </Div>
    );
}

export default DropdownMenu;
