import React, { Dispatch, SetStateAction } from 'react';
import { ProductSizesAvaibility } from '../../types';
import './ProductSizes.scss';

interface ProductSizesProps {
  setSize: Dispatch<SetStateAction<string>>;
  sizes: ProductSizesAvaibility[];
  selected: string;
}

export const ProductSizes = (props: ProductSizesProps): JSX.Element => {
  function handleChange(event: any) {
    props.setSize(event.target.value);
  }

  return (
    <div className="product--sizes-list">
      {props.sizes.map((size, sizeKey) => (
        <label
          className={
            'product--size' +
            ((props.selected === size.value && ' product--size_active') || '')
          }
          key={sizeKey}>
          <div className="product--size-value">{size.value}</div>
          <div className="product--size-qty">{size.qty || '-'}</div>
          <input
            name="size"
            type="checkbox"
            checked={props.selected === size.value}
            onChange={handleChange}
            value={size.value}
          />
        </label>
      ))}
    </div>
  );
};
