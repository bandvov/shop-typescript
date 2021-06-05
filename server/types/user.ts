import { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  orders: string[];
  previousOrders: string[];
  avatar: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  confirmed: boolean;
  phoneNumber: string;
  address: string;
}
export interface IProduct extends Document {
  name: string;
  category: string;
  brand: string;
  sku: string;
  discount: string;
  description: string;
  available: boolean;
  availableCount: string;
  favorites: string[];
  colors: string[];
  images: string[];
  thumbnails: string[];
  sizes: string[];
  sleepingPlace: string;
  seating: string;
  frame: string;
  mechanism: string;
  legsMaterial: string;
  pillowFilling: string;
  linenBox: boolean;
  usbCharger: boolean;
  removableCover: boolean;
  decorationPillows: boolean;
  deliveryOption: string;
  manufacturer: string;
}
