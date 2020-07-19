import {makeStyles} from "@material-ui/core/styles";
import {SliderType} from "./type";

export const useSliderStyles = makeStyles({
	slider: {
		position: "absolute",
		backgroundColor: "#012B69",
		color: "#fff",
		width: "45%",
		height: "100%",
		zIndex: 2,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all 200ms ease-in-out",
		transform: (props: SliderType) => (props.isSignUp === true ? "skew(-10deg)" : "skew(10deg)"),
		right: (props: SliderType) => (props.isSignUp === true ? "50vw" : "0vw"),

		"&:before": {
			content: '""',
			position: "absolute",
			width: "100%",
			height: "100%",
			backgroundColor: "#012B69",
			left: (props: SliderType) => (props.isSignUp === true ? "-50%" : "50%"),
		},

		"& .signIn-text": {
			textAlign: "center",
			transform: (props: SliderType) => (props.isSignUp === true ? "skew(10deg)" : "skew(-10deg)"),

			"& p": {
				fontWeight: 200,
				margin: "30px auto",
				width: "75%",
			},

			"& button": {
				backgroundColor: "transparent",
				borderRadius: "1px",
				border: "1px solid #fff",
				color: "#fff",
				padding: "10px 45px",
			},
		},
	},
});
