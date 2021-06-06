import express from 'express';
import { catchErrors } from '../handlers/error';
import {
  ADD_PRODUCT_ROUTE,
  GET_PRODUCT_ROUTE,
  GET_CATALOG_PRODUCTS_ROUTE,
} from '../constants';
import {
  addProduct,
  getProduct,
  getProductsForCatalog,
} from '../controllers/product';

const router = express.Router();

router.post(ADD_PRODUCT_ROUTE, catchErrors(addProduct));
router.get(GET_PRODUCT_ROUTE, catchErrors(getProduct));
router.get(GET_CATALOG_PRODUCTS_ROUTE, catchErrors(getProductsForCatalog));

export default router;
