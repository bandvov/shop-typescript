import { ADD_CATALOG_PRODUCTS } from '../types';

const initialState:{products:Product[]} = {
    products: []
};
export const productReducer = (state = initialState, action:{type:string,payload:Product[]}): typeof initialState => {
    switch(action.type) {
        case ADD_CATALOG_PRODUCTS:
            return {
                ...state,
               products: action.payload
            };
        
        default:
            return state;
        }
    };
