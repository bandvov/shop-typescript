import dotenv from 'dotenv';

dotenv.config();

export const BASIC_BACKGROUND_COLOR = '#E6EFF8';
export const ERROR_MESSAGE_COLOR = '#ff0000';
export const DARK_OUT_SHADOW = '6px 6px 8px 0px rgba(0,0,0,0.25)';
export const DARK_INSET_SHADOW = 'inset 2px 2px 4px 0px rgba(0,0,0,0.25)';
export const LIGHT_OUT_SHADOW = '-6px -6px 8px 0px rgb(255,255,255)';
export const lIGHT_INSET_SHADOW = 'inset -2px -2px 4px 0px rgb(255,255,255)';
export const DARK_SMALL_OUT_SHADOW = '2px 2px 4px 0px rgba(0,0,0,0.25)';
export const lIGHT_SMALL_OUT_SHADOW = '-2px -2px 4px 0px rgb(255,255,255)';
export const BASE_API_URL = process.env.NODE_ENV == 'production'? process.env.REACT_APP_BASE_API_URL:'http://localhost:5000';

export const ABOUT_US_PATH = '/about-us';
export const CART_PATH = '/cart';
export const CATALOG_PATH = '/catalog-products';
export const CONTACTS_PATH = '/contacts';
export const HOMEPAGE_PATH = '/';
export const LOGIN_PATH = '/login';
export const PRODUCT_CATEGORY_PATH = '/product/category';
export const PRODUCT_DETAILS_PATH = '/product/';
export const PROFILE_PATH = '/profile';
export const REGISTER_PATH = '/register';
export const WISHLIST_PATH = '/wishlist';
export const SEARCH_PRODUCT_PATH = '/product-search';

export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 992;
export const BREAKPOINT_XL = 1200;
export const BREAKPOINT_XXL = 1400;

export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_REGEXP =
  /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)(?=.*[#^@$!%*?&]+)[A-Za-z\d@$!%*?#^&]{8,20}$/;
export const NAME_REGEXP = /^([ \u00c0-\u01ffa-zA-Z'-]+){2,}$/;

export const isMobile = window.matchMedia(`(max-width: ${BREAKPOINT_MD}px)`).matches;
export const isTablet = window.matchMedia(`(max-width: ${BREAKPOINT_LG}px)`).matches;

export const CATEGORIES = [
  {
   name: 'Kitchen',
  children:[
  {name:'aaa',url:'adasdas'},
  {name:'aaa dasda',url:'adasdas'},
  {name:'aaa',url:'adasdas'},
],
  },
  {
    name:'Bedrooms',
    children:[
      {name:'aaa',url:'adasdas'},
      {name:'aaa',url:'adasdas'},
    ],
  },
  {

   name: 'Kid Rooms',
   children:[{name:'aaa',url:'adasdas'}],
  },
  {
    name: 'Leaving rooms',
    children:[{name:'aaa',url:'adasdas'}],
  },
  {
   name: 'Hallways',
   children:[{name:'aaa',url:'adasdas'}],
  },
  {
   name: 'Office furniture',
   children:[{name:'aaa',url:'adasdas'}],
  },
  {
   name: 'Mattress',
   children:[{name:'aaa',url:'adasdas'}],
  },
  {
   name: 'Upholstered furniture',
   children:[{name:'aaa',url:'adasdas'}],
  },
  {
   name: 'Cabinets',
   children:[{name:'aaa',url:'adasdas'}],
  }
];