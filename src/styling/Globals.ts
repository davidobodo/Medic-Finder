import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					WebkitFontSmoothing: "auto",
				},
				body: {
					backgroundColor: "#fff",
				},
			},
		},
	},
});

//proposed project colors
// darkBlue: {
//     color: '#012B69'
// },
// mediumBlue: {
//     color: '#1175f6'
// },
// lightBlue: {
//     color: '#f0f6ff'
// },
