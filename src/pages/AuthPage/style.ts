import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

export const useAuthPageStyles = makeStyles((theme) => ({
	'@keyframes slideIn': {
		'0%': {
			opacity: 0,
			transform: 'translateX(50px)'
		},
		'100%': {
			opacity: 1,
			transform: 'translateX(0px)'
		}
	},
	authPageContainer: {
		display: 'flex',
		height: '100vh',
		minHeight: '900px'
	},
	leftColumn: {
		backgroundColor: '#012B69',
		flex: 1,
		flexBasis: '60%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '100px',
		position: 'relative',
		[theme.breakpoints.down('md')]: {
			flexBasis: '40%',
			padding: '40px'
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	leftColumnInner: {
		color: '#fff'
	},
	leftColumnHeader: {
		fontSize: '70px',
		[theme.breakpoints.down('md')]: {
			fontSize: '50px'
		}
	},
	leftColumnDescription: {
		fontSize: '20px',
		[theme.breakpoints.down('md')]: {
			fontSize: '16px'
		}
	},
	leftColumnList: {
		fontSize: '20px',
		[theme.breakpoints.down('md')]: {
			fontSize: '16px'
		}
	},
	rightColumn: {
		flex: 1,
		padding: '80px',
		flexBasis: '40%',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			flexBasis: '60%'
		},
		[theme.breakpoints.down('sm')]: {
			flexBasis: '100%'
		},
		[theme.breakpoints.down('xs')]: {
			padding: '50px'
		}
	},
	logo: {
		position: 'fixed',
		display: 'flex',
		alignItems: 'center',
		fontWeight: 600,
		fontSize: '24px',
		color: '#012B69',
		top: '40px',
		right: '80px',
		[theme.breakpoints.down('xs')]: { right: '50px' },

		'& a': {
			color: 'inherit',
			textDecoration: 'none'
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px'
		}
	},
	formContainer: {
		width: '100%',
		animationName: `$slideIn`,
		animationDuration: '0.25s',
		animationDirection: 'normal',
		animationTimingFunction: 'ease-in-out',
		animationFillMode: 'forwards',
		'& .MuiButton-contained': {
			boxShadow: 'none',
			backgroundColor: '#012B69',
			color: '#fff',
			padding: '10px 40px',
			width: '100%',
			marginBottom: '20px',

			'&:enabled': {
				opacity: 1
			},

			'&:disabled': {
				opacity: 0.5,
				cursor: 'not-allowed !important'
			}
		}
	},
	header: {
		marginBottom: '20px',
		fontWeight: 600,
		color: '#012B69'
	},
	formDescription: {
		marginBottom: '30px',
		fontWeight: 600,
		color: '#012B69'
	},
	inputContainer: {
		marginBottom: '20px',

		'&:last-of-type': {
			marginBottom: '50px'
		},
		'& input': {
			'&::placeholder': {
				opacity: 0.1
			}
		}
	},
	enquiry: {
		textAlign: 'center',

		'& button': {
			backgroundColor: 'transparent',
			border: 'none',
			textDecoration: 'underline',
			cursor: 'pointer',
			fontStyle: 'italic',

			'&:hover': {
				color: '#012B69'
			}
		}
	}
}));
