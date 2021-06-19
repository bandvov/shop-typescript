import React,{useEffect} from 'react';
import Div from '../components/common/div';
import Card from '../components/card';
import Button from '../components/common/button';
import { BASIC_BACKGROUND_COLOR} from '../configs/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCatalogProducts } from '../API';
import { addCataLogProductsToStore } from '../redux/actions/product-actions';
import Search from '../components/search/search';
import { StoreState, AppDispatch } from '../redux/store';
import { useSelector } from './../redux/helper';



const products = [
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0527/0791/8011/files/C-WE-057b_170x170.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06YBJ7GIHfpG9cREN5U42V4aYzzSpWn4RCLRz5qYd06E6U0WdrtEP6mo5V5X4-B3Wb3Y&usqp=CAU',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0s7avEY-b2GfC6TSx6Xo378LHXEJr7qyOqaRpb7YoeNw32ro-5yEd6kJmRBVZ4BlwvU4&usqp=CAU',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
  {
    images: [
      'https://www.homelinefurniture.ie/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/o/monza-blue-3-front_eyk.jpg',
    ],
    _id: 124543,
    name: 'asdasd',
    price: 1232,
    category: 'sdasd',
    width: '45cm',
    height: '45cm',
    depth: '45cm',
  },
];
function HomePage(): React.ReactElement {
  const dispatch:AppDispatch = useDispatch();

  useEffect(()=>{
    fetchCatalogProducts().then(res=>{
 dispatch(addCataLogProductsToStore(res.data.products));
}).catch(e=>{
  if (e) {
    console.log(e);    
  }
});
  },[]);
const {products} =  useSelector((state: StoreState) => {
  return  {products:state.products.products};
});

  return (
    <Div background="primary" padding="0 6rem" direction="column" minHeight="100%" justify="flex-start">
     <Search />   
      <Div
      background= 'primary'
        width='100%'
        minHeight={'60vh'}
        padding="1rem 0 1rem"
        justify="flex-start"
        wrap="wrap"
        border="1px solid red"
      >
        {products.map((product: any) => ( <Card
            margin={'.7rem'}
            padding="1rem"
            height="100%"
            key={product.name}
            borderRadius="10px"
          >
            <Div direction="column">
           <Link to={`/${product._id}`}>
                <Div>
                  <img
                    style={{ margin: 0 }}
                    width='100%'
                    height='100%'            
                    src={product?.images[0]}
                    />
                </Div>
              </Link>                  
              <div>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/${product._id}`}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                    }}
                  >
                    {product.name}
                  </span>
                  <br />
                </Link>
                <span
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '11px',
                  }}
                >
                  {product.category}
                </span>
                <br />
                <span
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                  }}
                >
                  $ {product.price}
                </span>
              </div>
              <div>
                <span style={{ margin: '1rem 0' }}>Size</span>
                <Div justify="flex-start">
                  <Div margin="0 .5rem 0 0" direction="column">
                    <span style={{ fontSize: '9px', color: '#727171' }}>
                      Width
                    </span>
                    <span style={{ fontSize: '9px' }}>{product.width}</span>
                  </Div>
                  {'x'}
                  <Div margin="0 .5rem" direction="column">
                    <span style={{ fontSize: '9px', color: '#727171' }}>
                      Height
                    </span>
                    <span style={{ fontSize: '9px' }}>{product.height}</span>
                  </Div>
                  {'x'}
                  <Div margin="0 .5rem" direction="column">
                    <span style={{ fontSize: '9px', color: '#727171' }}>
                      Depth
                    </span>
                    <span style={{ fontSize: '9px' }}>{product.depth}</span>
                  </Div>
                </Div>
                <Button
                  border="1px solid blue"
                  color="black"
                  background={BASIC_BACKGROUND_COLOR}
                >
                  Add to cart
                </Button>
              </div>
            </Div>
          </Card>
        ))}
      </Div>   
    </Div>
  );
}

export default HomePage;
