import React from 'react';
import {
  BrowserRouter as Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

export default function ({ match }) {
  return (
    <div>
      <menu>
        <Link to={`${match.path}/1`} style={{ marginRight: '10px' }}>
          Page 1
        </Link>
        <Link to={`${match.path}/2`}>Page 2</Link>
      </menu>
      <Switch>
        <Route exact path={`${match.path}/1`}>
          <AboutFirstPage />
        </Route>
        <Route exact path={`${match.path}/2`}>
          <AboutSecondPage />
        </Route>
        <Redirect from={`${match.path}`} to={`${match.path}/1`} />
      </Switch>
    </div>
  );
}

// function AboutPage(props) {
// const id = props.match.params.aboutId;
// if (props.match.params.aboutId) {
// return (<div>Hello</div>)
// }
// else {
// return (
// <div>Hello OO</div>
// )
// }
// }

class AboutFirstPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>First about Page</h3>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          repudiandae atque non natus fugit autem explicabo, architecto labore
          aut laudantium.
        </div>
      </div>
    );
  }
}

function AboutSecondPage(props) {
  return (
    <div>
      <h3>Second about Page</h3>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        repudiandae atque non natus fugit autem explicabo, architecto labore aut
        laudantium.
      </div>
    </div>
  );
}
