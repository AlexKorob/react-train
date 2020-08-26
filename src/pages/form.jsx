import React from 'react';
import 'scss/form.scss';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputNameRef = React.createRef();
    this.state = {
      inputName: '',
      inputSurname: '',
      sex: '',
    }
  }

  handleNameChange = event => {
    this.setState({
      inputName: event.target.value,
    });
  }

  handleSurnameChange = event => {
    this.setState({
      inputSurname: event.target.value,
    });
  }

  handleSex = event => {
    this.setState({
      sex: event.target.value,
    });
  }

  handleForm = event => {
    event.preventDefault();
    let name = this.state.inputName ? this.state.inputName : null;
    let surname = this.state.inputSurname ? this.state.inputSurname : null;
    let sex = this.state.sex ? this.state.sex : null;
    alert(`Your name: ${name}, surname: ${surname}, sex: ${sex}`);
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <h3>FORM</h3>
        <div className="row">
          <label htmlFor="name">Name: </label>
          <input autoComplete='off' ref={this.inputNameRef} type="text" name='name' id='name' value={this.state.inputName} onChange={this.handleNameChange} />
        </div>

        <div className="row">
          <label htmlFor='surname'>Surname: </label>
          <input autoComplete='off' type="text" name='surname' id='surname' value={this.state.inputSurname} onChange={this.handleSurnameChange} />
        </div>

        <div className='row'>
          <label htmlFor='sex'>Sex: </label>
          <select
            name='sex'
            id='sex'
            onChange={this.handleSex}
            style={{width: '185px'}}>
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
          </select>
        </div>
        <input type="submit" value="Sumbit" />
      </form>
    );
  }
}


export default Form;