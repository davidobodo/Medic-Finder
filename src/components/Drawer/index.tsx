import React from 'react';
import clsx from 'clsx';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
        zIndex: 20,
        paddingTop: '30px'
    },
    fullList: {
        width: 'auto',
    },
    hamburger: {
        zIndex: 20,
        width: '25px',
        height: '3px',
        backgroundColor: '#012B69',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '30px',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        '&:before': {
            content: '""',
            width: '25px',
            height: '3px',
            backgroundColor: '#012B69',
            position: 'absolute',
            transform: 'translateY(-6px)',
        },
        '&:after': {
            content: '""',
            width: '25px',
            height: '3px',
            backgroundColor: '#012B69',
            position: 'absolute',
            transform: 'translateY(6px)'
        }
    },
    logo: {
        fontWeight: 600,
        fontSize: '24px',
        color: '#012B69',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: '20px',
        paddingLeft: '20px',

        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        },
    },
    linksContainer: {
        '& .MuiListItem-gutters': {
            padding: '0',
        },

        '& a': {
            padding: '20px 45px',
            textDecoration: 'none',
            color: '#000',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',

            '&:hover': {
                backgroundColor: '#f0f6ff'
            },

            '&.active': {
                borderLeft: '5px solid #1175f6',
                backgroundColor: '#f0f6ff',

            }
        }
    }
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.logo}>
                <Link to='/'>
                    Enye Cohort 4
            </Link>
            </div>
            <List className={classes.linksContainer}>
                <ListItem >
                    <NavLink to='/' exact>
                        Home
                        </NavLink>
                </ListItem>
                <ListItem >
                    <NavLink to='/history' exact>
                        History
                        </NavLink>
                </ListItem>
            </List>

        </div>
    );

    return (
        <div>
            {(['left'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)} className={classes.hamburger}></div>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
