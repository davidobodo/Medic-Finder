import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignUp from './signUp/signUp';
import Login from './login/login';

import { useAuthPageStyles } from './style';

const AuthPage = () => {
	const classes = useAuthPageStyles();
	const userId = useSelector((state) => state.auth.userId);
	const [ isSignUp, setIsSignUp ] = useState(true);

	if (userId) {
		return <Redirect to="/" />;
	}

	return (
		<div className={classes.authPageContainer}>
			<div className={classes.leftColumn}>
				<div className={classes.leftColumnInner}>
					<h1 className={classes.leftColumnHeader}>Enye Cohort 4 Initiative</h1>
					<p className={classes.leftColumnDescription}>
						In this COVID world that we live in, it is important that people can
						easily access medical assistance if need be. With that in mind, this
						application is built to help you locate health facilities within a given
						area.
					</p>
					<ul className={classes.leftColumnList}>
						<p>Health facilities that could be searched for include:</p>
						<li>Hospitals</li>
						<li>Pharmacies</li>
						<li>Clinics</li>
						<li>Medical Offices</li>
					</ul>
				</div>
			</div>
			<div className={classes.rightColumn}>
				<div className={classes.logo}>
					<a href="/">Enye Cohort 4</a>
				</div>
				{isSignUp ? (
					<SignUp onRequireLogin={() => setIsSignUp(false)} />
				) : (
					<Login onRequireSignUp={() => setIsSignUp(true)} />
				)}
			</div>
		</div>
	);
};

export default AuthPage;
