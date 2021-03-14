import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import RoomListPage from '@pages/RoomListPage';
import styled from 'styled-components';
import RoomDetailPage from '@pages/RoomDetailPage';

// ToDo props.theme.dark or props.theme.light 에 따라 다르게 동작.
const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/list" component={RoomListPage} />
          <Route path="/room/:id" component={RoomDetailPage} />
          <Route component={() => <Redirect to="/list" />} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
