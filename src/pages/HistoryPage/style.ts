import { makeStyles } from '@material-ui/core/styles';

export const useHistoryPageStyles = makeStyles((theme) => ({
	root: {
		padding: '100px 8vw',
		[theme.breakpoints.down('sm')]: {
			padding: '100px 5vw'
		},
		[theme.breakpoints.down('xs')]: {
			paddingTop: '50px'
		}
	},
	header: {
		marginBottom: '30px',
		color: '#012B69',
		[theme.breakpoints.down('md')]: {
			fontSize: '36px'
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '24px'
		}
	}
}));
