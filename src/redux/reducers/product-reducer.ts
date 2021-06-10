import { FETCH_CATALOG_PRODUCTS } from '../types';
const initialState:{products:Product[]} = {
    products: []
};
export const productReducer = (state =initialState, action:{type:string,payload:unknown}) => {
    switch(action.type) {
        case FETCH_CATALOG_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        
        default:
            return state;
        }
    };
