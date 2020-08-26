import React from 'react';
import PropTypes from 'prop-types';


class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePosition: {
        x: -100,
        y: -100,
      }
    }
  }

  handleMouse = event => {
    this.setState({
      mousePosition: {
        x: event.clientX,
        y: event.clientY,
      }
    });
  }

  render () {
    return (
      <div
       style={{height: '200px', backgroundColor: '#a33', color: '#eee', textAlign: 'center', cursor: 'none'}}
       onMouseMove={this.handleMouse}
      >
        Mouse position <br />X: {this.state.mousePosition.x}, Y: {this.state.mousePosition.y}
        {this.props.render(this.state.mousePosition)}
      </div>
    );
  }
}


class MouseCatTracker extends React.Component {
  render() {
    return (
      <>
        <h3>Move mouse cursor</h3>
        <Mouse render={mouse => (
          <Cat mouse={{x: mouse.x - 50 , y: mouse.y - 25}}/>
        )}/>
      </>
    );
  }
}


function Cat(props) {
  const mousePos = props.mouse;
  return (
    <img
     src='/cat.jpg'
     alt='cat head'
     style={{display: 'block', position: 'absolute', left: `${mousePos.x}px`, top: `${mousePos.y}px`,
             height: '50px', width: 'auto', pointerEvents: 'none'}}
    />
  );
}

Cat.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })
}

export default MouseCatTracker;