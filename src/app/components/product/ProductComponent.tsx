import React, { useState, useEffect } from 'react';
import { Product } from './types';
import {
  ProductTitle,
  ProductImages,
  ProductDetails,
  ProductAvaibility,
  ProductSelectQty
} from './components';
import { addProduct } from 'app/components/quote';
import { useDialog } from 'app/hooks';
import { DialogComponent } from 'components/dialog';

export const ProductComponent = (product: Product) => {
  const [size, setSize] = useState(product.avaibility[0].sizes[0].value);
  const [qty, setQty] = useState(1);
  const { response, addProductToQuote } = addProduct();
  const { setDialog, ...dialog } = useDialog();

  const handleSubmit = async () => {
    await addProductToQuote({
      data: {
        article: product.article,
        size,
        qty
      }
    });
  };

  useEffect(() => {
    if (response && response.status === 'success') {
      setDialog({
        title: 'Enhorabuena!',
        message: response.message,
        show: true
      });
    }
  }, [response]);

  return (
    <React.Fragment>
      <div className="app-content">
        <section className="box-shadow">
          <div className="container">
            <div className="py-3">
              <ProductTitle name={product.name} title={product.title} />
            </div>
            <div className="d-flex flex-row pb-3">
              <div className="pr-3">
                <ProductImages img={product.img} alt="{product.title}" />
              </div>
              <ProductDetails
                article={product.article}
                brand={product.brand}
                color={product.color}
                price={product.price}
              />
            </div>
          </div>
        </section>
        <section className="box-shadow py-3">
          <ProductAvaibility
            selectedSize={size}
            avaibility={product.avaibility}
            setSize={setSize}
          />
        </section>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-3 pr-1">
                <ProductSelectQty selectedQty={qty} qty={10} setQty={setQty} />
              </div>
              <div className="col-9">
                <button
                  type="button"
                  className="btn d-block w-100 btn-primary text-uppercase font-weight-bold"
                  onClick={handleSubmit}>
                  Añadir pedido
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DialogComponent {...dialog} />
    </React.Fragment>
  );
};
