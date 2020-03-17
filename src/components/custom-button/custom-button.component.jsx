import React from 'react';
import FormInput from '../form-input/form-input.component';
import './custom-button.styles.scss';


const CustomButton = ({children, ...otherProps }) => (
    <button className= 'custom-button' {...otherProps}>
        {children}
    </button>
);


export default CustomButton