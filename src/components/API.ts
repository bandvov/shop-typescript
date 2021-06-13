import axios from 'axios';
import { BASE_API_URL, REGISTER_PATH, LOGIN_PATH, CATALOG_PATH, SEARCH_PRODUCT_PATH } from '../configs/constants';

const API = axios.create({baseURL:BASE_API_URL});
export const registerUser = (data:IUser):Promise<IUser | {message:string}> => {
    return API
    .post( REGISTER_PATH, data);
};

export const loginUser = (data:IUser): Promise<IUser | {message:string}> =>{
return API.post(LOGIN_PATH,data,{withCredentials:true});
};
export const fetchCatalogProducts = (): Promise<any> =>{
return API.get(CATALOG_PATH);
};

export const searchProducts = (search:string): Promise<any> =>{
return API.post(SEARCH_PRODUCT_PATH, {search});
};


