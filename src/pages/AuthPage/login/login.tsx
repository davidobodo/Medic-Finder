import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useLoginStyles } from './style';
import { requestLoginStart } from '../../../redux/actions'




const Login = () => {
    const classes = useLoginStyles();
    const dispatch = useDispatch();


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


    const SIGNUP_INPUT_FIELDS = [
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
        }
    ];

    const handleOnChange = (e: React.ChangeEvent<{ name?: string; value: string }>): void => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail({ ...email, value })
        }

        if (name === 'password') {
            setPassword({ ...password, value })
        }
    }

    const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault()
        const userDetails = {
            email: email.value,
            password: password.value,
        }
        dispatch(requestLoginStart(userDetails))
    }

    return (
        <section className={classes.loginContainer}>
            <Typography component="h2" variant="h2">Login</Typography>
            <form noValidate >
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
                <Button variant="contained" onClick={handleOnSubmit}>Search</Button>
            </form>
        </section>
    )
}

export default Login