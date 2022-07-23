import React from 'react';

const SnipcartButton = ({ data }) => {

  return (
    <button
      className="snipcart-add-item btn btn-danger"
      data-item-id={data.itemId}
      data-item-name={data.itemName}
      data-item-price={data.itemPrice}
      data-item-weight={data.itemWeight}
      data-item-url={data.itemUrl}
      data-item-description={data.itemDesc}
      data-item-shippable={data.isShippable}
      data-item-image={data.itemImg}
      data-item-custom1-name={data.custom1Name ? data.custom1Name : null}
      data-item-custom1-options={data.custom1options ? data.custom1options : null}
      >
      {data.label}
    </button>
  );
};

export default SnipcartButton;