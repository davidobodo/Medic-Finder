import {makeStyles} from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		height: "80px",
		width: "100%",
		top: "0",
		left: "0",
		backgroundColor: "#fff",
		paddingLeft: "5vw",
		paddingRight: "10vw",
		display: "flex",
		justifyContent: "space-between",
		borderBottom: "1px solid rgba(0,0,0,0.1)",
		zIndex: 10,
	},

	logo: {
		display: "flex",
		alignItems: "center",
		fontWeight: 600,
		fontSize: "24px",
		color: "#012B69",

		"& a": {
			color: "inherit",
			textDecoration: "none",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px",
		},
	},
	linksContainer: {
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},

		"& a": {
			padding: "20px 45px",
			textDecoration: "none",
			color: "#000",
			fontSize: "16px",
			display: "flex",
			alignItems: "center",

			"&:hover": {
				backgroundColor: "#f0f6ff",
			},

			"&.active": {
				borderBottom: "5px solid #012B69",
				backgroundColor: "#f0f6ff",
			},
		},
	},
}));
