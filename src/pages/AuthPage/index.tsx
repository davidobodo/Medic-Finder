import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

import SignUp from "./signUp/signUp";
import Login from "./login/login";

import {useAuthPageStyles} from "./style";

const AuthPage = () => {
	const classes = useAuthPageStyles();
	const userId = useSelector((state) => state.auth.userId);
	const [isSignUp, setIsSignUp] = useState(true);

	if (userId) {
		return <Redirect to="/" />;
	}

	return (
		<div className={classes.authPageContainer}>
			<div className={classes.slider}>
				<div className="signIn-text">
					<h2>Already Signed up?</h2>
					<p>Login to your account so you can continue building and editing your onboarding flows</p>
					<button>LOG IN</button>
				</div>
				<div className="signUp-text"></div>
			</div>
			<div className={classes.leftColumn}>
				<Login onRequireSignUp={() => setIsSignUp(true)} />
			</div>
			<div className={classes.rightColumn}>{isSignUp ? <SignUp onRequireLogin={() => setIsSignUp(false)} /> : <Login onRequireSignUp={() => setIsSignUp(true)} />}</div>
		</div>
	);
};

export default AuthPage;
