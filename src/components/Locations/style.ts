import {makeStyles} from "@material-ui/core/styles";

export const useLocationsStyles = makeStyles((theme) => ({
	"@keyframes myEffect": {
		"0%": {
			opacity: 0,
		},
		"100%": {
			opacity: 1,
		},
	},
	container: {
		height: "calc(100vh - 80px);",
		display: "flex",
		flexDirection: "column",
		position: "fixed",
		top: "80px",
		left: "0",
		width: "100%",
		backgroundColor: "#f0f6ff",
		animationName: "$myEffect",
		animationDuration: "1s",
		animationDirection: "normal",
		animationTimingFunction: "ease-in-out",
		animationFillMode: "forwards",
		padding: "5vw",
	},
	body: {
		flex: "1",
		overflow: "hidden",
		padding: "15px",
		backgroundColor: "#fff",
		borderRadius: "15px",
	},
	leftColumn: {
		height: "100%",
		padding: "30px",
		position: "relative",
	},
	backLink: {
		color: "#1175f6",
		fontSize: "14px",
		fontStyle: "italic",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		marginBottom: "10px",
	},
	leftColumnHeader: {
		paddingTop: "15px",
		borderBottom: "1px solid rgba(0,0,0,0.1)",
		marginBottom: "20px",
	},
	leftColumnBody: {
		height: "calc(100vh - 10vw - 362px)",
		overflow: "scroll",
	},
	leftColumnFacility: {
		marginBottom: "15px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "30px",
		},
	},
	leftColumnText: {
		fontSize: "18px",
		marginBottom: "15px",
		opacity: "0.5",

		"& span": {
			fontWeight: "600",
			fontStyle: "italic",
		},
	},
	rightColumn: {
		height: "100%",
		borderLeft: "1px solid rgba(0,0,0,0.1)",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	map: {
		height: "100%",
		marginLeft: "15px",
		borderTopRightRadius: "10px",
		borderTopLeftRadius: "10px",
	},
}));
