import { makeStyles } from '@material-ui/core/styles';

export const useGoogleSearchTabStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: 600,
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
        '& .MuiFormControl-fullWidth': {
            marginBottom: '30px',
        },
        '& .MuiInputBase-input': {
            color: '#fff'
        },
        '& .MuiInputLabel-root': {
            color: '#fff'
        }
    },


}))