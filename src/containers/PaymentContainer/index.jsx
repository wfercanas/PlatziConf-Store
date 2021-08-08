import React from 'react';
import '../../styles/components/Payment.css';

const PaymentContainer = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">Paga con PayPal</div>
      </div>
      <div />
    </div>
  );
};

export { PaymentContainer };
