import React,{ useState } from 'react';
import styled from 'styled-components';
import Div from '../common/div';
import SmallShadowButton from '../common/small-shadow-button';
import { BASIC_BACKGROUND_COLOR } from '../../configs/constants';

const BurgerContent = styled(Div)` 
    z-index: 2;
    position: fixed;
    background-color: ${(props)=>props.theme.background.primary};
    min-width: 140px;
    height: 100vh;
    padding: 0 .2rem;
    transition: 1s ease-in-out;
    transform: ${(props)=>props.show?'translateX(0)':'translateX(-200px)'};
`;
const BurgerContainer = styled(Div)`
div:first-child{
z-index: 2;


align-items: center;
}`;


function Hamburger({items}:{items?:React.ReactElement[]}) {
    const [show,setShow] = useState<boolean>(false);
    return (
        <BurgerContainer>
           <Div onClick={()=> setShow(true)} direction='column'>
           <div style={{width:'2rem',height:'.3rem',backgroundColor:'black',margin:'0 .2rem 0.2rem'}}></div>
           <div style={{width:'2rem',height:'.3rem',backgroundColor:'black',margin:'0 .2rem 0.2rem'}}></div>
           <div style={{width:'2rem',height:'.3rem',backgroundColor:'black',margin:'0 .2rem 0.2rem'}}></div>
           </Div>
           <BurgerContent justify='flex-start' direction='column' show={show} top='0' left='0' position='absolute'>
                <div style={{width:'100%'}}>
                    <Div justify='space-between' align='center' height='40px' width='100%'>
                        <h3 style={{marginLeft:'1rem'}}>Menu</h3>
                        <SmallShadowButton 
                            onClick={()=>setShow(false)}
                            zIndex={3} 
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
                    <div style={{width:'100%'}}>
                    <Div direction='column'>
<SmallShadowButton margin='0.05rem .2rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
<SmallShadowButton margin='0.05rem .2rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
<SmallShadowButton margin='0.05rem .2rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
<SmallShadowButton margin='0.05rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
<SmallShadowButton margin='0.05rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
<SmallShadowButton margin='0.05rem' borderRadius='0'  color="black"  background={BASIC_BACKGROUND_COLOR}>asdasdasdas</SmallShadowButton>
                     </Div>
                    </div>
                   
           </BurgerContent>
        </BurgerContainer>
    );
}

export default Hamburger;
