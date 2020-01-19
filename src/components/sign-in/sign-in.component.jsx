import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type='email' 
            value={email}
            handleChange={this.handleChange}
            label='email' 
            required
          />
          <FormInput 
            name="password"
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password' 
            required
          />
          <CustomButton type='submit'> sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle}> sign in with google </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn; 