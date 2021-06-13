import {useState, useCallback } from 'react';
import styled from 'styled-components';
import Div from './common/div';
import searchIcon from '../images/search-icon.svg';
import { searchProducts } from './API';

const StyledInput = styled.input<IProps>`
  margin: ${(props) => props.margin};
  border: none;
  outline: none;
  padding-left: 2.5rem;
  outline: none;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius || '35px'};
  background-color: ${(props) => props.theme.background.primary};
  box-shadow: ${(props) => props.theme.lightInsetShadow},
    ${(props) => props.theme.darkInsetShadow};
`;
const StyledSearchImage = styled.img<IProps>`
position: absolute;
left: 15px;
border-radius: 50% 0 0 50%;
padding: 1rem .5rem 1rem 1rem;
cursor: pointer;
`;

function SearchPanel(props: IProps): React.ReactElement {

const [search,setSearch] = useState<string>('');        
  
  const searchHandler =  (value:string)=>{

    if (value === '') return;

    searchProducts(value).then((res)=>{
      console.log('search response',res);    
    }).catch(e=>{
      console.log(e);
    });
};
  return (
    <Div padding={'0'} width="100%" height='100%' position="relative" borderRadius="35px">
      <StyledSearchImage onClick={()=>searchHandler(search)} aria-label='Click to search' title='Click to search'   
        src={searchIcon}
      />
      <StyledInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} {...props} />
    </Div>
  );
}
export default SearchPanel;
