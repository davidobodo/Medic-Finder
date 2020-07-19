import {makeStyles} from "@material-ui/core/styles";

export const useAddressCardStyles = makeStyles((theme) => ({
	root: {
		padding: "18px",
		backgroundColor: "#fff",
		display: "flex",
		alignItems: "flex-start",
		boxShadow: "1px 1px 10px -5px rgba(0,0,0,0.3)",
		marginBottom: "15px",
		[theme.breakpoints.down("md")]: {},
	},
	symbol: {
		width: "100px",
		height: "100px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f6ff",
		color: "#fff",
		fontSize: "80px",
		marginRight: "20px",
		flexShrink: 0,
		[theme.breakpoints.down("md")]: {
			width: "80px",
			height: "80px",
			fontSize: "60px",
		},
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	name: {
		marginBottom: "10px",
		fontWeight: 500,
		[theme.breakpoints.down("md")]: {
			fontSize: "18px",
		},
	},
	address: {
		marginBottom: "10px",
		fontSize: "18px",
		[theme.breakpoints.down("md")]: {
			fontSize: "14px",
		},
	},
}));
