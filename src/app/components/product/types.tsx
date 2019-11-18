export interface ProductSizesAvaibility {
  value: string;
  qty: number;
}

export interface ProductStoreAvaibility {
  id: string;
  name: string;
  sizes: ProductSizesAvaibility[];
}

export interface ProductPrice {
  value: number;
  currency: string;
  country: string;
}

export interface Product {
  article: string;
  name: string;
  title: string;
  img: string;
  brand: string;
  color: string;
  price: ProductPrice;
  avaibility: ProductStoreAvaibility[];
}
