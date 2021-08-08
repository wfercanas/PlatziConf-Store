import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import { CheckoutContainer } from '../containers/CheckoutContainer';
import { HomeContainer } from '../containers/HomeContainer';
import { InformationContainer } from '../containers/InformationContainer';
import { PaymentContainer } from '../containers/PaymentContainer';
import { SuccessContainer } from '../containers/SuccessContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/checkout" component={CheckoutContainer} />
        <Route
          exact
          path="/checkout/information"
          component={InformationContainer}
        />
        <Route exact path="/checkout/payment" component={PaymentContainer} />
        <Route exact path="/checkout/success" component={SuccessContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
