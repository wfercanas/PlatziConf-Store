import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { CheckoutContainer } from '../containers/CheckoutContainer';
import { HomeContainer } from '../containers/HomeContainer';
import { InformationContainer } from '../containers/InformationContainer';
import { PaymentContainer } from '../containers/PaymentContainer';
import { SuccessContainer } from '../containers/SuccessContainer';
import { NotFound } from '../containers/NotFound';

import { AppContextProvider } from '../context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/checkout" component={CheckoutContainer} />
            <Route
              exact
              path="/checkout/information"
              component={InformationContainer}
            />
            <Route
              exact
              path="/checkout/payment"
              component={PaymentContainer}
            />
            <Route
              exact
              path="/checkout/success"
              component={SuccessContainer}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export { App };
