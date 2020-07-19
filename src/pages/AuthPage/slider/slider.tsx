import React from "react";
import PropTypes from "prop-types";

import {useSliderStyles} from "./style";
import {SliderType} from "./type";

const Slider: React.FC<SliderType> = ({onRequireLogin, ...props}) => {
	const classes = useSliderStyles(props);
	console.log(props.isSignUp);
	return (
		<div className={classes.slider}>
			<div className="signIn-text">
				<h2>Already Signed up?</h2>
				<p>Login to your account so you can continue building and editing your onboarding flows</p>
				<button onClick={onRequireLogin}>LOG IN</button>
			</div>
			<div className="signUp-text"></div>
		</div>
	);
};

Slider.propTypes = {
	onRequireLogin: PropTypes.func,
	isSignUp: PropTypes.bool,
};

export default Slider;
