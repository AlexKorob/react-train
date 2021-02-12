import React from 'react';
import {Link} from 'react-router-dom';


export default class NavBar extends React.Component {
  render() {
    return (
      <menu>
        {this.props.routerConfig.map((conf, pos) => {
          let isLastItem = this.props.routerConfig.length - 1 === pos;
          return (
            <Link
              to={conf.path}
              key={conf.name}
              style={{ marginRight: isLastItem ? '0' : '20px' }}
            >
              {conf.name}
            </Link>
          );
        })}
      </menu>
    );
  }
}
