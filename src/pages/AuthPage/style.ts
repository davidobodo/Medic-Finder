import { makeStyles } from "@material-ui/core/styles";

export const useAuthPageStyles = makeStyles((theme) => ({
	"@keyframes slideIn": {
		"0%": {
			opacity: 0,
			transform: "translateX(50px)",
		},
		"100%": {
			opacity: 1,
			transform: "translateX(0px)",
		},
	},
	authPageContainer: {
		display: "flex",
		height: "100vh",
		position: "relative",
		// minHeight: '900px'
	},

	leftColumn: {
		flex: 1,
		flexBasis: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "80px",
		[theme.breakpoints.down("md")]: {
			flexBasis: "40%",
			padding: "80px",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	rightColumn: {
		flex: 1,
		padding: "80px",
		flexBasis: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			flexBasis: "60%",
		},
		[theme.breakpoints.down("sm")]: {
			flexBasis: "100%",
		},
		[theme.breakpoints.down("xs")]: {
			padding: "50px",
			flexDirection: "column",
		},
	},
	formContainer: {
		width: "400px",
		textAlign: "center",
		animationName: "$slideIn",
		animationDuration: "0.25s",
		animationDirection: "normal",
		animationTimingFunction: "ease-in-out",
		animationFillMode: "forwards",

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
		"& .MuiButton-contained": {
			boxShadow: "none",
			backgroundColor: "#012B69",
			color: "#fff",
			padding: "10px 40px",
			width: "100%",
			marginBottom: "20px",

			"&:enabled": {
				opacity: 1,
			},

			"&:disabled": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},
		},
	},
	header: {
		marginBottom: "20px",
		fontWeight: 600,
		color: "#012B69",
	},
	formDescription: {
		marginBottom: "30px",
		fontWeight: 600,
		color: "#012B69",
	},
	inputContainer: {
		marginBottom: "20px",

		"& .MuiTextField-root": {
			width: "100%",
		},

		"&:last-of-type": {
			marginBottom: "50px",
		},
		"& input": {
			"&::placeholder": {
				opacity: 0.1,
			},
		},
	},
	enquiry: {
		textAlign: "center",

		[theme.breakpoints.up("md")]: {
			display: "none",
		},

		"& button": {
			backgroundColor: "transparent",
			border: "none",
			textDecoration: "underline",
			cursor: "pointer",
			fontStyle: "italic",

			"&:hover": {
				color: "#012B69",
			},
		},
	},
	databaseError: {
		marginTop: "10px",
		color: "#ff0000",
		textAlign: "center",
	},
}));
