import React from 'react';
import './ProductTitle.scss';

interface ProductTitleProps {
  name: string;
  title: string;
}

export const ProductTitle = (props: ProductTitleProps): JSX.Element => (
  <div className="product--title">
    <h1 className="product--title-name">{props.name}</h1>
    <h2 className="product--title-subtitle">{props.title}</h2>
  </div>
);
