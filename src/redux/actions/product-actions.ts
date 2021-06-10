import { ADD_CATALOG_PRODUCTS } from '../types';


export const addCataLogProductsToStore = (payload: Product[]):{type: string,payload:Product[]} => {
    return {
        type: ADD_CATALOG_PRODUCTS,
        payload
    };
};