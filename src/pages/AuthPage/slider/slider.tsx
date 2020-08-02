import React from "react";
import PropTypes from "prop-types";

import { useSliderStyles } from "./style";
import { SliderType } from "./type";

const Slider: React.FC<SliderType> = ({ onRequireLogin, onRequireSignUp, ...props }) => {
	const classes = useSliderStyles(props);
	return (
		<div className={classes.slider}>
			<div className="info-text signin">
				<h2>Already Signed up?</h2>
				<p>Login to your account so you can continue searching for medical faicilities</p>
				<button onClick={onRequireLogin}>LOG IN</button>
			</div>
			<div className="info-text signup">
				<h2>Don't have an account?</h2>
				<p>Create an account to start searching for medical facilities around you easily</p>
				<button onClick={onRequireSignUp}>SIGN UP</button>
			</div>
		</div>
	);
};

Slider.propTypes = {
	onRequireLogin: PropTypes.func,
	isSignUp: PropTypes.bool,
};

export default Slider;
