import React, { useState } from 'react';
import { useAuthPageStyles } from './style';
import TextField from '@material-ui/core/TextField';
import { SIGNUP_INPUT_FIELDS } from './constants';


const AuthPage = () => {
    const classes = useAuthPageStyles();

    return (
        <section className={classes.signUpFormContainer}>
            <form action="">
                {SIGNUP_INPUT_FIELDS.map((input, i) => {
                    const { label, placeholder, type } = input;
                    return <TextField
                        id="standard-full-width"
                        label={label}
                        placeholder={placeholder}
                        // error={errInput}
                        // helperText={errInput ? 'Please enter a valid location' : ''}
                        fullWidth
                        type={type}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                })}

            </form>
        </section>
    )
}

export default AuthPage