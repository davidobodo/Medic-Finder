import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import SignUp from "./signUp/signUp";
import Login from "./login/login";
import Slider from "./slider/slider";

import { useAuthPageStyles } from "./style";

const AuthPage = () => {
	const userId = useSelector((state) => state.auth.userId);
	const [isSignUp, setIsSignUp] = useState(true);
	const classes = useAuthPageStyles(isSignUp);

	if (userId) {
		return <Redirect to="/" />;
	}

	return (
		<div className={classes.authPageContainer}>
			<div className="logo">
				Hospital Finder
			</div>
			<Slider
				onRequireLogin={() => setIsSignUp(false)}
				isSignUp={isSignUp}
				onRequireSignUp={() => setIsSignUp(true)} />
			<div className={classes.leftColumn}>
				<Login onRequireSignUp={() => setIsSignUp(true)} />
			</div>
			<div className={classes.rightColumn}>{isSignUp ? <SignUp onRequireLogin={() => setIsSignUp(false)} /> : <Login onRequireSignUp={() => setIsSignUp(true)} />}</div>
		</div>
	);
};

export default AuthPage;
