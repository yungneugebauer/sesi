import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MateriaPrincipal from './components/materias/materiaprincipal';
import Materia2 from './components/materias/materia2';
import Materia3 from './components/materias/materia3';
import Materia4 from './components/materias/materia4';

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/materia" component={MateriaPrincipal} exact></Route>
      <Route path="/materia/materia2" component={Materia2} exact></Route>
      <Route path="/materia/materia3" component={Materia3} exact></Route>
      <Route path="/materia/materia4" component={Materia4} exact></Route>
      <Route
        path="/materia/materia5"
        component={MateriaPrincipal}
        exact
      ></Route>
      <Route
        path="/materia/materia6"
        component={MateriaPrincipal}
        exact
      ></Route>
      <Route component={Pagina404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
