import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useAuthPageStyles } from '../style';
import { SignUpProp } from '../type';
import { requestSignUpStart } from '../../../redux/actions/authActions';
import { handleCheckEmailValidity } from '../../../utils';

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

	const [ err, setErr ] = useState(true);

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

	const validateFirstName = (value) => {
		if (value.length < 2) {
			setFirstName({
				...firstName,
				hasError: true,
				errorMessage: 'FirstName must be greater than two letters'
			});
		} else {
			setFirstName({
				...firstName,
				hasError: false,
				errorMessage: ''
			});
		}
	};

	const validateLastName = (value) => {
		if (value.length < 2) {
			setLastName({
				...lastName,
				hasError: true,
				errorMessage: 'LastName must be greater than two letters'
			});
		} else {
			setLastName({
				...lastName,
				hasError: false,
				errorMessage: ''
			});
		}
	};

	const validateEmail = (value) => {
		const isValid = handleCheckEmailValidity(value);
		if (!isValid) {
			setEmail({ ...email, hasError: true, errorMessage: 'Please Enter a valid email' });
		} else {
			setEmail({ ...email, hasError: false, errorMessage: '' });
		}
	};

	const validatePassword = (value) => {
		if (value.length < 6) {
			setPassword({
				...password,
				hasError: true,
				errorMessage: 'Password must be at least 6 characters'
			});
		} else {
			setPassword({
				...password,
				hasError: false,
				errorMessage: ''
			});
		}
	};

	const validateConfirmPassword = (value) => {
		if (value !== password.value) {
			setConfirmPassword({
				...confirmPassword,
				hasError: true,
				errorMessage: 'Must match your password'
			});
		} else {
			setConfirmPassword({
				...confirmPassword,
				hasError: false,
				errorMessage: ''
			});
		}
	};

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

	const handleValidateInput = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'firstName':
				validateFirstName(value);
				break;
			case 'lastName':
				validateLastName(value);
				break;
			case 'email':
				validateEmail(value);
				break;
			case 'password':
				validatePassword(value);
				break;
			case 'confirmPassword':
				validateConfirmPassword(value);
				break;
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

	useEffect(
		() => {
			if (
				firstName.value.length >= 2 &&
				lastName.value.length >= 2 &&
				password.value.length >= 6 &&
				confirmPassword.value === password.value &&
				handleCheckEmailValidity(email.value)
			) {
				setErr(false);
			} else {
				setErr(true);
			}
		},
		[ firstName, lastName, password, confirmPassword, email ]
	);

	return (
		<section className={classes.formContainer}>
			<Typography component="h4" variant="h4" className={classes.header}>
				Sign up
			</Typography>
			<p className={classes.formDescription}>
				Create your 100% free account and start searching for health facilities near you.
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
								error={state.hasError}
								helperText={state.hasError ? state.errorMessage : ''}
								value={state.value}
								onChange={handleOnChange}
								onBlur={handleValidateInput}
								fullWidth
								type={type}
								InputLabelProps={{
									shrink: true
								}}
								data-testid={name}
							/>
						</div>
					);
				})}
				<Button variant="contained" disabled={err} onClick={handleOnSubmit}>
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
