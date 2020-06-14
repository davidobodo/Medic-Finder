import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAuthPageStyles } from '../style';
import { SignUpProp } from '../type';
import { requestSignUpStart } from '../../../redux/actions/authActions';

const SignUp: React.FC<SignUpProp> = ({ onRequireLogin }) => {
	const classes = useAuthPageStyles();
	const dispatch = useDispatch();

	const [ firstName, setFirstName ] = useState({
		value: '',
		hasError: false,
		errorMessage: ''
	});

	const [ lastName, setLastName ] = useState({
		value: '',
		hasError: false,
		errorMessage: ''
	});

	const [ email, setEmail ] = useState({
		value: '',
		hasError: false,
		errorMessage: ''
	});

	const [ password, setPassword ] = useState({
		value: '',
		hasError: false,
		errorMessage: ''
	});

	const [ confirmPassword, setConfirmPassword ] = useState({
		value: '',
		hasError: false,
		errorMessage: ''
	});

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
			placeholder: 'Password',
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
		}
	];

	const handleOnChange = (e: React.ChangeEvent<{ name?: string; value: string }>): void => {
		const { name, value } = e.target;

		if (name === 'firstName') {
			setFirstName({ ...firstName, value });
		}

		if (name === 'lastName') {
			setLastName({ ...lastName, value });
		}

		if (name === 'email') {
			setEmail({ ...email, value });
		}

		if (name === 'password') {
			setPassword({ ...password, value });
		}

		if (name === 'confirmPassword') {
			setConfirmPassword({ ...confirmPassword, value });
		}
	};

	const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		e.preventDefault();
		const userDetails = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			password: password.value,
			confirmPassword: confirmPassword.value
		};

		dispatch(requestSignUpStart(userDetails));
	};

	return (
		<section className={classes.formContainer}>
			<Typography component="h4" variant="h4" className={classes.header}>
				Sign up
			</Typography>
			<p className={classes.formDescription}>
				Create your 100% free account and start searching for <br /> health services near you.
			</p>

			<form noValidate>
				{SIGNUP_INPUT_FIELDS.map((input, i) => {
					const { label, placeholder, type, state, name } = input;
					return (
						<div key={name} className={classes.inputContainer}>
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
									shrink: true
								}}
							/>
						</div>
					);
				})}
				<Button variant="contained" onClick={handleOnSubmit}>
					Sign Up
				</Button>
			</form>
			<div className={classes.enquiry}>
				Already have an account? <button onClick={onRequireLogin}>Login</button>
			</div>
		</section>
	);
};

export default SignUp;
