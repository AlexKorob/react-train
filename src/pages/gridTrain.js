import React from 'react';
import 'scss/grid/root.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Grid1 from '../components/gridTrain/1';
import Grid3 from '../components/gridTrain/3';
import Grid4 from '../components/gridTrain/4';
import Grid5 from '../components/gridTrain/5';
import Grid6 from 'components/gridTrain/6';

const Grid = ({ match }) => {
  return (
    <>
      <menu className='gridMenu'>
        <Link to={`${match.path}/1`}>Grid 1</Link>
        <Link to={`${match.path}/3`}>Grid 3</Link>
        <Link to={`${match.path}/4`}>Grid 4(grid-template-areas)</Link>
        <Link to={`${match.path}/5`}>Grid 5(align)</Link>
        <Link to={`${match.path}/6`}>Grid 6(Adaptive Methods)</Link>
      </menu>
      <Switch>
        <Route path={`${match.path}/1`}>
          <Grid1 />
        </Route>

        <Route path={`${match.path}/3`}>
          <Grid3 />
        </Route>

        <Route path={`${match.path}/4`}>
          <Grid4 />
        </Route>

        <Route path={`${match.path}/5`}>
          <Grid5 />
        </Route>

        <Route path={`${match.path}/6`}>
          <Grid6 />
        </Route>
      </Switch>
    </>
  );
};

export default Grid;
