import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useEffect } from 'react';
import { useReducer } from 'react';


export default class Home extends React.Component {
  static defaultProps = {
    someProp: undefined,
  }

  componentDidMount() {
    this.$el = $(this.el);
    console.log(this.$el)
  }

  render() {
    return (
      <>
        <h3>Home Page!</h3>
        <div ref={el => this.el = el}>Some Info - {String(this.props.someProp)}</div>
        <Counter />
        <Portal />
      </>
    );
  }
}


function Counter(props) {
  const [state, dispatchCount] = useReducer(reducer, {count: 0, ii: "123"});

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {...state, count: state.count + 1};
      case "decrement":
        return {...state, count: state.count - 1};
      default:
        throw Error("Possible use only: increment or decrement!");
    }
  }

  useEffect(() => {
    document.title = document.title.split(":clicked")[0] + `:clicked ${state.count}`;
  });
  
  return (
    <div>
      Counter: {state.count} раз 
      <button
       onClick={() => dispatchCount({type: 'increment'})}
       style={{marginLeft: '20px'}}
      >Add +1</button>
      <button
       onClick={() => dispatchCount({type: 'decrement'})}
       style={{marginLeft: '20px'}}
      >Minus -1</button>
    </div>
  );
}

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>PORTAL</div>,  
      document.getElementById('portal')
    );
  }
}