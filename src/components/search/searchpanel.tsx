import {useState } from 'react';
import styled from 'styled-components';
import Div from '../common/div';
import searchIcon from '../../images/search-icon.svg';
import { searchProducts } from '../../API';
import Button from '../common/button';
import { useDispatch } from 'react-redux';
import { addCataLogProductsToStore } from '../../redux/actions/product-actions';
import { AppDispatch } from '../../redux/store';

const StyledInput = styled.input<IProps>`
  margin: ${(props) => props.margin};
  border: none;
  outline: none;
  padding-left: .5rem;
  padding-right: 3rem;
  outline: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius || '35px'};
  background-color: ${(props) => props.theme.background.primary};
  box-shadow: ${(props) => props.theme.lightInsetShadow},
    ${(props) => props.theme.darkInsetShadow};
`;
const StyledSearchButton = styled(Button)`

background-color: ${(props)=>props.theme.background || 'white'};
box-shadow: ${(props)=>props.theme.lightSmallOutShadow},${(props)=>props.theme.darkSmallOutShadow};
`;

function SearchPanel(props: IProps): React.ReactElement {

const [search,setSearch] = useState<string>('');

const dispatch: AppDispatch = useDispatch();

  const searchHandler =  (value:string)=>{
    searchProducts(value).then((res)=>{      
      dispatch(addCataLogProductsToStore(res.data));
    }).catch(e=>{
      console.log(e);
    });
};
  return (
    <Div padding={'0'} width="100%" height='100%' position="relative" borderRadius="35px">
      <StyledInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} {...props} />
      <StyledSearchButton
        active={props.active}
        right={true}
        margin="0 0 0 1rem"
        borderRadius="20px"
        width="30px"
        height="30px"
        background="none"
        color="black"
        position='absolute'
      >
        <img onClick={()=>searchHandler(search)} aria-label='Click to search' title='Click to search'   
          src={searchIcon}
        />
      </StyledSearchButton>
    </Div>
  );
}
export default SearchPanel;
