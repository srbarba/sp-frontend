import React, { Dispatch, SetStateAction } from 'react';
import { ProductStoreAvaibility } from '../../types';
import { ProductSizes } from '../productSizes/ProductSizes';
import iconTiendaNegro from 'brandIcons/icon-tienda-negro.svg';

interface ProductStoreAvaibilityProps {
  setSize: Dispatch<SetStateAction<string>>;
  selectedSize: string;
  avaibility: ProductStoreAvaibility[];
}

export const ProductAvaibility = (
  props: ProductStoreAvaibilityProps
): JSX.Element => (
  <div className="product--avaibility">
    {props.avaibility.map((store, storeKey) => (
      <div className="container" key={storeKey}>
        <div className="pb-3">
          <img src={iconTiendaNegro} alt="Tiendas" />
          <small className="pl-2">
            Tallas disponibles en tienda: <b>{store.name}</b>
          </small>
        </div>
        <ProductSizes
          selected={props.selectedSize}
          sizes={store.sizes}
          setSize={props.setSize}
        />
      </div>
    ))}
  </div>
);
