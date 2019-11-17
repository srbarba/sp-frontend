import React from 'react';
import { Product } from './types';

export const ProductComponent = (props: Product) => {
  return <div>Product: {props.article}</div>;
};
