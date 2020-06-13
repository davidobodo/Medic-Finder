import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAuthPageStyles } from '../style';
import { requestLoginStart } from '../../../redux/actions'

type LoginProp = {
    onRequireSignUp: () => void
}


const Login: React.FC<LoginProp> = ({ onRequireSignUp }) => {
    const classes = useAuthPageStyles();
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
        <section className={classes.formContainer}>
            <Typography component="h4" variant="h4" className={classes.header}>Login</Typography>
            <form noValidate >
                {SIGNUP_INPUT_FIELDS.map((input, i) => {
                    const { label, placeholder, type, state, name } = input;
                    return <div key={name} className={classes.inputContainer}>
                        <TextField
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
                    </div>

                })}
                <Button variant="contained" onClick={handleOnSubmit}>Search</Button>
            </form>
            <div className={classes.enquiry}>Don't have an account? <button onClick={onRequireSignUp}>Sign Up</button></div>
        </section>
    )
}

export default Login