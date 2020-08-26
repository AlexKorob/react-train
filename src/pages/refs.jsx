import React from 'react';


// function TextInputFunc(props) {
//   let textInput = useRef(null);

//   function focusOnTextInput() {
//     textInput.current.focus();
//   };

//   function componentDidMount() {
//     focusOnTextInput();
//   }
//   return (
//     <div>
//       <input type="text" ref={textInput}/>
//       <input
//         type="button"
//         value="Focus on text field"
//         onClick={focusOnTextInput}
//       />
//     </div>
//   );
// }

class TextInput extends React.Component {
  constructor (props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusOnTextInput = props => {
    // this.textInput.current <-- доступ к нативному DOM-элементу input
    this.textInput.current.focus();
  };

  componentDidMount() {
    this.focusOnTextInput();
  }

  render () {
    return (
      <div>
        <input type="text" ref={this.textInput}/>
        <input
         type="button"
         value="Focus on text field"
         onClick={this.focusOnTextInput}
        />
      </div>
    );
  }
}


export default TextInput;
// export default TextInputFunc;
