import { makeStyles } from '@material-ui/core/styles';
import doctor from '../../assets/doctor.jpg';

export const useHomeStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		display: 'flex',
		backgroundColor: '#f0f6ff',
		background: `linear-gradient(0deg, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${doctor}) `,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		padding: '0 12vw',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: '24px',
			paddingRight: '24px'
		}
	},
	leftColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	title: {
		fontSize: '130px',
		fontWeight: 800,
		lineHeight: 1,
		color: '#012B69',
		marginBottom: '100px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '80px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '50px'
		}
	}
}));
