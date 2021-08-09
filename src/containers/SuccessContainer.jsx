import React from 'react';
import '../styles/components/Success.css';

const SuccessContainer = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Fernando, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección.</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export { SuccessContainer };
