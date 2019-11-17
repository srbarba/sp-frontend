import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { Product, ProductComponent } from 'components/product';
import productMock from 'src/mock/product.json';

interface ProductPageProps {
  id: string;
}

export const ProductPage = (props: RouteComponentProps<ProductPageProps> ) => {
  const { match: {params} } = props;

  // getProduct and redirect if no exists
  const product = productMock as Product;

  if(params.id !== "0176944") {
    return <Redirect to='/404'/>;
  } else {
    return <ProductComponent {...product} />;
  }
};
