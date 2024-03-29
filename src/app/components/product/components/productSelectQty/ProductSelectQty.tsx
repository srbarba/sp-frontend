import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

interface ProductSelectQtyProps {
  setQty: Dispatch<SetStateAction<number>>;
  selectedQty: number;
  qty: number;
}

export const ProductSelectQty = (props: ProductSelectQtyProps): JSX.Element => {
  const selectedQty = props.selectedQty || 1;

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    props.setQty(parseInt(event.target.value, 0));
  }

  return (
    <select
      defaultValue={selectedQty}
      className="form-control"
      name="qty"
      id="qty"
      onChange={handleChange}>
      {Array.from(Array(props.qty), (e, i) => (
        <option {...e} key={i} value={(++i).toString()}>
          {i}
        </option>
      ))}
    </select>
  );
};
