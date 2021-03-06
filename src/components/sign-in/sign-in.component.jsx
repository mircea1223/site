import React from 'react';

import './sign-in.styles.scss';

import {signInWithGoogle} from '../../firebase/firebase.utils';
import {signInWithFacebook} from '../../firebase/firebase.utils';

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

handleSubmit = event =>{
    event.preventDefault();
    this.setState({email: '', password: ''})
}

handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value})
}

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in without email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type= 'email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label = 'email'
                    required
                    />
                    <FormInput 
                    name="password" 
                    type="password"
                    label = 'password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;