import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';

import {ErrorBoundaryDefault} from './errorBoundaries.js';
import {Game} from './pages/game.js';
import NavBar from './NavBar.js';
import Home from './pages/Home.js';
import Grid from './pages/gridTrain';
import Form from './pages/form.jsx'
import Form2 from './pages/form2.tsx'
import About from './pages/about.js';
import {Repeater} from './pages/some_componenst.jsx';
import Ref from 'pages/refs.jsx';
import MouseTracker from 'pages/mouseTracker.jsx';
import MaterialUI from 'pages/materialUI';
import TrainTypescript from 'pages/trainTypescript.tsx';

const routerConfig = [
  {path: '/home', component: Home, name: 'Home', exact: true},
  {path: '/game', component: Game, name: 'Game'},
  {path: '/grid', component: Grid, name: 'Grid'},
  {path: '/form', component: Form, name: 'Form'},
  {path: '/form-func-component', component: Form2, name: 'Form2'},
  {path: '/about', component: About, name: 'About'},
  {path: '/repeater', component: Repeater, name: 'Repeat'},
  {path: '/refs', component: Ref, name: 'Refs'},
  {path: '/mouse-tracker', component: MouseTracker, name: 'Mouse Tracker'},
  {path: '/material-ui', component: MaterialUI, name: 'Material UI'},
  {path: '/train-typescript', component: TrainTypescript, name: 'Train typescript'}
];

export default () => (
  <React.StrictMode>
    <Router>
      <NavBar routerConfig={routerConfig} />
      <Switch>
        <ErrorBoundaryDefault>
          {routerConfig.map(conf => {
            return <Route
                    exact={conf.exact ? true : false}
                    path={conf.path}
                    component={conf.component}
                    key={conf.name}
                   />;
          })}
        </ErrorBoundaryDefault>
      </Switch>
    </Router>
  </React.StrictMode>
);