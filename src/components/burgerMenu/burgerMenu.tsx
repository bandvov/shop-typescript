import React,{ useState } from 'react';
import styled from 'styled-components';
import Div from '../common/div';
import SmallShadowButton from '../common/small-shadow-button';
import { BASIC_BACKGROUND_COLOR, ABOUT_US_PATH, CONTACTS_PATH, PRODUCT_CATEGORY_PATH } from '../../configs/constants';
import BurgerMenuItem from './burgerMenuItem';

const BurgerContent = styled(Div)` 
    z-index: 3;
    position: fixed;
    background-color: ${(props)=>props.theme.background.primary};
    min-width: 140px;
    height: 100vh;
    padding: 0 .2rem;
    transition: .3s ease-in-out;
    transform: ${(props)=>props.show?'translateX(0)':'translateX(-220px)'};
`;
const BurgerContainer = styled(Div)`
div:first-child{
    z-index: 1;
    align-items: center;
}`;
const BurgerMenuItemsWrapper = styled.div<IProps>`
background: ${(props)=>props.theme.background.primary};
margin-bottom: 2rem;
    display:flex; 
    flex-direction: column;
    overflow: auto;
    padding-left: 1rem;
`;
const BurgerMenuModal = styled.div<IProps>`
z-index:2;
display:${(props)=>props.show?'block':'none'};
width:100%;
height:100vh;
position: fixed;
background:#0a090963;
top: 0;
left: 0;
 `;   

function BurgerMenu({items}:{items?:React.ReactElement[]}) {
    const [show,setShow] = useState<boolean>(false);
    return (
        <BurgerContainer>
           <Div margin='0 1rem 0' onClick={()=> setShow(true)} direction='column'>
           <div style={{width:'1.5rem',height:'.2rem',backgroundColor:'black',margin:'0 .2rem 0.3rem'}}></div>
           <div style={{width:'1.5rem',height:'.2rem',backgroundColor:'black',margin:'0 .2rem 0.3rem'}}></div>
           <div style={{width:'1.5rem',height:'.2rem',backgroundColor:'black',margin:'0 .2rem 0.2rem'}}></div>
           </Div>
           <BurgerMenuModal onClick={()=>setShow(false)} show={show}></BurgerMenuModal>
           <BurgerContent justify='flex-start' align='stretch' direction='column' show={show} top='0' left='0' position='absolute'>
                <div style={{width:'100%'}}>
                    <Div background={BASIC_BACKGROUND_COLOR} justify='space-between' align='center' height='50px' width='100%'>
                        <h3 style={{marginLeft:'2rem'}}>Menu</h3>
                        <SmallShadowButton 
                            onClick={()=>setShow(false)}
                
                            margin="0 0 0 1rem"
                            borderRadius="20px"
                            width="30px"
                            right={true}    
                            position='absolute'
                            height="30px"
                            background={BASIC_BACKGROUND_COLOR}
                            color="black">X
                        </SmallShadowButton>          
                    </Div>
                </div>  
                <BurgerMenuItemsWrapper>
                    <BurgerMenuItem url='/' title='Home'/>
                    <BurgerMenuItem url={ABOUT_US_PATH} title='About us'/>
                    <BurgerMenuItem url={CONTACTS_PATH} title='Contacts'/>
                    <span style={{fontSize:'18px',fontWeight:500,marginBottom:'.3rem' }}>Categories</span>             
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/kitchen'} title='Kitchen'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/bedroom'} title='Bedrooms'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/kidsrooms'} title='Kid Rooms'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/leavingroom'} title='Leaving rooms'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/hallways'} title='Hallways'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/office-furniture'} title='Office furniture'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/mattress'} title='Mattress'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/upholstered-furniture'} title='Upholstered furniture'/>
                    <BurgerMenuItem url={PRODUCT_CATEGORY_PATH+'/cabinets'} title='Cabinets'/>
                </BurgerMenuItemsWrapper>                 
            </BurgerContent>
        </BurgerContainer>
    );
}

export default BurgerMenu;
