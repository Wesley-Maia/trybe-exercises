import React from 'react';

class LoginInput extends React.Component {
  validateEmail = (email) => {
    const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!isValid || email.lenght === 0) {
      return 'Invalid email.';
    }
    return '';
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          value={ value }
          id="login"
          onChange={ onChange }
        />
        <span className="form-error">{this.validateEmail(value)}</span>
      </label>
    );
  }
}

export default LoginInput;
