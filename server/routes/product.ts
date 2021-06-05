import express from 'express';
import { catchErrors } from '../handlers/error';
import { ADD_PRODUCT_ROUTE, GET_PRODUCT_ROUTE } from '../configs';
import { addProduct, getProduct } from '../controllers/product';

const router = express.Router();

router.post(ADD_PRODUCT_ROUTE, catchErrors(addProduct));
router.get(GET_PRODUCT_ROUTE, catchErrors(getProduct));

export default router;
