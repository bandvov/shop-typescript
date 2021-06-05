import { Request, Response } from 'express';
import Product from '../models/Product';
import { IProduct } from '../types/user';
import { skuGenerator } from '../utils/sku-generator';

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product: IProduct = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ product });
};

export const addProduct = async (req: Request, res: Response) => {
  const {
    available,
    availableCount,
    brand,
    category,
    colors,
    decorationPillows,
    deliveryOption,
    description,
    discount,
    frame,
    images,
    manufacturer,
    mechanism,
    name,
    pillowFilling,
    legsMaterial,
    linenBox,
    seating,
    sizes,
    sleepingPlace,
    removableCover,
    thumbnails,
    usbCharger,
  } = req.body as Pick<
    IProduct,
    | 'available'
    | 'availableCount'
    | 'brand'
    | 'category'
    | 'colors'
    | 'decorationPillows'
    | 'deliveryOption'
    | 'description'
    | 'discount'
    | 'favorites'
    | 'frame'
    | 'images'
    | 'manufacturer'
    | 'mechanism'
    | 'name'
    | 'pillowFilling'
    | 'legsMaterial'
    | 'linenBox'
    | 'seating'
    | 'sizes'
    | 'sleepingPlace'
    | 'removableCover'
    | 'thumbnails'
    | 'usbCharger'
  >;
  const foundProduct = await Product.findOne({ name });

  if (foundProduct) {
    return res.status(400).json({ message: 'Product already exist' });
  }
  const createdProduct = new Product({
    available,
    availableCount,
    brand,
    category,
    colors,
    decorationPillows,
    deliveryOption,
    description,
    discount,
    frame,
    images,
    manufacturer,
    mechanism,
    name,
    pillowFilling,
    legsMaterial,
    linenBox,
    seating,
    sku: skuGenerator([name, brand, category]),
    sizes,
    sleepingPlace,
    removableCover,
    thumbnails,
    usbCharger,
  });
  await createdProduct.save();
  if (createdProduct) {
    return res.status(201).json({ message: 'Product added' });
  }
};
