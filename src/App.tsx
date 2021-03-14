import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from '@components/Header';
import HomePage from '@pages/HomePage';
import AccountPage from '@pages/AccountPage';
import ListPage from '@pages/ListPage';
import styled from 'styled-components';

// ToDo props.theme.dark or props.theme.light 에 따라 다르게 동작.
const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Header name={'bhlee'} age={30} />
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/list" component={ListPage} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/home" />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
