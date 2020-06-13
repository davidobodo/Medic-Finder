import { makeStyles } from '@material-ui/core/styles';

export const useAuthPageStyles = makeStyles(theme => ({
    authPageContainer: {
        display: 'flex',
        height: '100vh',
        minHeight: '900px'
    },
    leftColumn: {
        // backgroundImage: 'linear-gradient(to right, #1175f6, #f0f6ff )',
        // backgroundColor: '#1175f6',
        backgroundColor: '#012B69',
        flex: 1,
        flexBasis: '60%'
    },
    rightColumn: {
        flex: 1,
        padding: '150px',
        flexBasis: '40%',
        display: 'flex',
        alignItems: 'center'

    },
    formContainer: {
        width: '100%',

        '& .MuiButton-contained': {
            boxShadow: 'none',
            backgroundColor: '#012B69',
            color: '#fff',
            padding: '10px 40px',
            width: '100%',
            marginBottom: '20px'
        },


    },
    header: {
        marginBottom: '20px',
        fontWeight: 600
    },
    formDescription: {
        marginBottom: '30px',
        fontWeight: 600

    },
    inputContainer: {
        marginBottom: '30px',

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
        textAlign: "center",

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

}))