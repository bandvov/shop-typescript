import { FETCH_CATALOG_PRODUCTS } from '../types';


export const fetchCataLogProducts = (payload: Product):unknown => {
    return {
        type: FETCH_CATALOG_PRODUCTS,
        payload
    };
};