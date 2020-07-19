import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
	createStyles({
		formControl: {
			minWidth: 250,
			marginBottom: 30,
			"& .MuiNativeSelect-select:not([multiple]) option, .MuiNativeSelect-select:not([multiple]) optgroup": {
				backgroundColor: "#000",
			},
		},
	})
);
