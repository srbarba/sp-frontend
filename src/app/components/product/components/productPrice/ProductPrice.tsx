import React from 'react';
import { ProductPrice as ProductPriceProps } from '../../types';

export const ProductPrice = (props: ProductPriceProps): JSX.Element => {
  const price = new Intl.NumberFormat(props.country, {
    style: 'currency',
    currency: props.currency
  }).format(props.value);

  return (
    <div className="product--price">
      <label>PVP</label>
      <span>{price}</span>
    </div>
  );
};
