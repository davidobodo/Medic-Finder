import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Drawer from '../Drawer';

import { useHeaderStyles } from './style';
import { requestSignOut } from '../../redux/actions/authActions';

const Header = () => {
	const classes = useHeaderStyles();
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(requestSignOut());
	};
	return (
		<div className={classes.root}>
			<div className={classes.logo}>
				<Link to="/">Enye Cohort 4</Link>
			</div>
			<Drawer />
			<div className={classes.linksContainer}>
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink exact to="/history">
					History
				</NavLink>
				<NavLink exact to="/auth" onClick={handleSignOut}>
					Log out
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
