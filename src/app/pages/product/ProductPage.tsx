import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ProductComponent, getProductById } from 'components/product';
import { withRouter } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import './ProductPage.scss';

interface ProductPageProps {
  id: string;
}

export const ProductPage = withRouter(
  (props: RouteComponentProps<ProductPageProps>) => {
    const { product, loading, getData } = getProductById(props.match.params.id);

    useEffect(() => {
      getData();
    }, []);

    return (
      <React.Fragment>
        <Header />

        {loading ? 'Loading...' : <ProductComponent {...product} />}

        <Footer />
      </React.Fragment>
    );
  }
);
