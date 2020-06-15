import React from 'react';
import clsx from 'clsx';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { useStyles } from './style';
import { Anchor } from './type';
import { requestSignOut } from '../../redux/actions/authActions';

//This drawer is used mainly on mobile screens to display a nice sidebar
//It has the ability to animate(slidein) the sidebar into the viewport from all directions
//but for this project we make use of sliding in through the left (line 75)
const TemporaryDrawer = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ state, setState ] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	//logic for toggling the visibility of the sidebar
	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const handleSignOut = () => {
		dispatch(requestSignOut());
	};

	//sidebar links
	const list = (anchor: Anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom'
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className={classes.logo}>
				<Link to="/">Enye Cohort 4</Link>
			</div>
			<List className={classes.linksContainer}>
				<ListItem>
					<NavLink to="/" exact>
						Home
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to="/history" exact>
						History
					</NavLink>
				</ListItem>
				<ListItem>
					<NavLink to="/auth" exact onClick={handleSignOut}>
						Log out
					</NavLink>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			{([ 'left' ] as Anchor[]).map((anchor) => (
				<React.Fragment key={anchor}>
					<div onClick={toggleDrawer(anchor, true)} className={classes.hamburger} />
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default TemporaryDrawer;
