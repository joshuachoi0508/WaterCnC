import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">X</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="welcome-message">Welcome to WaterCnC</p>
          <br/>
          <div className="login-form">
            <br/>
            <label>
              <input 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
                autoComplete="off"
              />
            </label>
            <br/>
            <label>
              <input 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                autoComplete="off"
              />
            </label>
            <br/>
            <div className="session-errors">
              {this.renderErrors()}
            </div>
            <button 
              className="session-submit" 
              type="submit"  
            > {this.props.formType}
            </button>
          </div>
          <div className="divider"></div>
          {this.props.otherForm}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);