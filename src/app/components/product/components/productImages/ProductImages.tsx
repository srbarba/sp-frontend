import React from 'react';

interface ProductImagesProps {
  img: string;
  alt: string;
}

export const ProductImages = (props: ProductImagesProps): JSX.Element => (
  <div className="product--images">
    <img className="product--img img-fluid" src={props.img} alt={props.alt} />
  </div>
);
