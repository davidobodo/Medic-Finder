import React, { useState } from 'react';

import { useAuthPageStyles } from './style';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const AuthPage = () => {
    const classes = useAuthPageStyles();

    const [firstName, setFirstName] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [lastName, setLastName] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [email, setEmail] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [password, setPassword] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const SIGNUP_INPUT_FIELDS = [
        {
            label: 'First Name',
            placeholder: 'First Name',
            type: 'text',
            state: firstName,
            name: 'firstName'
        },
        {
            label: 'Last Name',
            placeholder: 'Last Name',
            type: 'text',
            state: lastName,
            name: 'lastName'
        },
        {
            label: 'Email',
            placeholder: 'email',
            type: 'email',
            state: email,
            name: 'email'
        },
        {
            label: 'Password',
            placeholder: 'password',
            type: 'password',
            state: password,
            name: 'password'
        },
        {
            label: 'Confirm Password',
            placeholder: 'Confirm Password',
            type: 'password',
            state: confirmPassword,
            name: 'confirmPassword'
        },
    ];

    const handleOnChange = (e: React.ChangeEvent<{ name?: string; value: string }>) => {
        const { name, value } = e.target;

        if (name === 'firstName') {
            setFirstName({ ...firstName, value })
        }

        if (name === 'lastName') {
            setLastName({ ...lastName, value })
        }

        if (name === 'email') {
            setEmail({ ...email, value })
        }

        if (name === 'password') {
            setPassword({ ...password, value })
        }

        if (name === 'confirmPassword') {
            setConfirmPassword({ ...confirmPassword, value })
        }
    }

    return (
        <section className={classes.signUpFormContainer}>
            <form noValidate>
                {SIGNUP_INPUT_FIELDS.map((input, i) => {
                    const { label, placeholder, type, state, name } = input;
                    return <TextField
                        key={name}
                        id="standard-full-width"
                        label={label}
                        name={name}
                        placeholder={placeholder}
                        // error={errInput}
                        // helperText={errInput ? 'Please enter a valid location' : ''}
                        value={state.value}
                        onChange={handleOnChange}
                        fullWidth
                        type={type}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                })}
                <Button variant="contained">Search</Button>
            </form>
        </section>
    )
}

export default AuthPage