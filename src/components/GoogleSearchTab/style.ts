import { makeStyles } from '@material-ui/core/styles';

export const useGoogleSearchTabStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		width: 600,
		[theme.breakpoints.down('md')]: {
			width: '100%'
		},
		'& label.Mui-focused': {
			color: '#012B69'
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#012B69'
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'red'
			},
			'&:hover fieldset': {
				borderColor: 'yellow'
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green'
			}
		},
		'& .MuiFormControl-fullWidth': {
			marginBottom: '30px'
		},
		'& .MuiInputBase-input': {
			color: 'rgba(0,0,0,0.5)'
		},
		'& .MuiInputLabel-root': {
			color: 'rgba(0,0,0,0.5)'
		},
		'& .MuiButton-contained': {
			boxShadow: 'none',
			backgroundColor: '#012B69',
			color: '#fff',
			padding: '10px 40px'
		}
	}
}));
