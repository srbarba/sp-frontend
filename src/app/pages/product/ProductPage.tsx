import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ProductComponent, getProductById } from 'components/product';
import { withRouter } from 'react-router-dom';

interface ProductPageProps {
  id: string;
}

export const ProductPage = withRouter(
  (props: RouteComponentProps<ProductPageProps>) => {
    const {product, loading} = getProductById(props.match.params.id);

    return (
      <React.Fragment>
        {loading ? 'Loading...' : <ProductComponent {...product} />}
      </React.Fragment>
    );
  }
);
