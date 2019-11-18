import React from 'react';
import { ProductPrice as Price } from '../productPrice/ProductPrice';
import { ProductPrice } from '../../types';
import './ProductDetails.scss';

interface ProductDetails {
  article: string;
  brand: string;
  color: string;
  price: ProductPrice;
}

export const ProductDetails = (props: ProductDetails): JSX.Element => (
  <div className="product--data">
    <div className="product--ref">
      <label>Ref</label>
      <span>{props.article}</span>
    </div>
    <div className="product--brand">
      <label>Marca</label>
      <span>{props.brand}</span>
    </div>
    <div className="product--color">
      <label>Color</label>
      <span>{props.color}</span>
    </div>
    <Price {...props.price} />
  </div>
);
