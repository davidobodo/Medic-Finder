import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {useAuthPageStyles} from "../style";
import {LoginProp} from "../type";
import {requestLoginStart} from "../../../redux/actions/authActions";
import {handleCheckEmailValidity} from "../../../utils";

const Login: React.FC<LoginProp> = ({onRequireSignUp}) => {
	const classes = useAuthPageStyles();
	const dispatch = useDispatch();
	const databaseError = useSelector((state) => state.auth.loginError);

	const [email, setEmail] = useState({
		value: "",
		hasError: false,
		errorMessage: "",
	});

	const [password, setPassword] = useState({
		value: "",
		hasError: false,
		errorMessage: "",
	});

	//General error state: This is responsible for checking that all form fields have no error before enabling the button
	const [err, setErr] = useState(true);

	const SIGNUP_INPUT_FIELDS = [
		{
			label: "Email",
			placeholder: "email",
			type: "email",
			state: email,
			name: "email",
		},
		{
			label: "Password",
			placeholder: "password",
			type: "password",
			state: password,
			name: "password",
		},
	];

	const validateEmail = (value) => {
		const isValid = handleCheckEmailValidity(value);
		if (!isValid) {
			setEmail({...email, hasError: true, errorMessage: "Please Enter a valid email"});
		} else {
			setEmail({...email, hasError: false, errorMessage: ""});
		}
	};

	const validatePassword = (value) => {
		if (value.length < 6) {
			setPassword({
				...password,
				hasError: true,
				errorMessage: "Password must be at least 6 characters",
			});
		} else {
			setPassword({
				...password,
				hasError: false,
				errorMessage: "",
			});
		}
	};

	const handleOnChange = (e: React.ChangeEvent<{name?: string; value: string}>): void => {
		const {name, value} = e.target;

		if (name === "email") {
			setEmail({...email, value});
		}

		if (name === "password") {
			setPassword({...password, value});
		}
	};

	const handleValidateInput = (e) => {
		const {name, value} = e.target;

		switch (name) {
			case "email":
				validateEmail(value);
				break;
			case "password":
				validatePassword(value);
				break;
		}
	};

	const handleOnSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		e.preventDefault();
		const userDetails = {
			email: email.value,
			password: password.value,
		};
		dispatch(requestLoginStart(userDetails));
	};

	//Logic for checking that all form fields no longer have errors
	useEffect(() => {
		if (password.value.length >= 6 && handleCheckEmailValidity(email.value)) {
			setErr(false);
		} else {
			setErr(true);
		}
	}, [password, email]);

	return (
		<section className={classes.formContainer}>
			<Typography component="h4" variant="h4" className={classes.header}>
				Login
			</Typography>
			<form noValidate>
				{SIGNUP_INPUT_FIELDS.map((input) => {
					const {label, placeholder, type, state, name} = input;
					return (
						<div key={name} className={classes.inputContainer}>
							<TextField
								id="standard-full-width"
								label={label}
								name={name}
								placeholder={placeholder}
								error={state.hasError}
								helperText={state.hasError ? state.errorMessage : ""}
								value={state.value}
								onChange={handleOnChange}
								onBlur={handleValidateInput}
								type={type}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</div>
					);
				})}
				<Button variant="contained" disabled={err} onClick={handleOnSubmit}>
					Login
				</Button>
			</form>
			<div className={classes.enquiry}>
				{"Don't have an account? "}
				<button onClick={onRequireSignUp}>Sign Up</button>
			</div>
			{databaseError && databaseError.error && <div className={classes.databaseError}>{databaseError.error.message}</div>}
		</section>
	);
};

Login.propTypes = {
	onRequireSignUp: PropTypes.func,
};

export default Login;
