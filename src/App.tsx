import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Wrapper from './App.styles';
import Button from './components/Button/Button';
import NavBar from './components/NavBar/NavBar';
import routes from './routes';

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>

      <Wrapper>
        <NavBar links={routes} />
        <Button>Testi</Button>
      </Wrapper>
    </Router>
  );
};

export default App;
