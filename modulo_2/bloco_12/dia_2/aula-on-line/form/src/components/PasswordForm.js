import React from 'react';

class PasswordForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={ value }
          id="password"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default PasswordForm;
