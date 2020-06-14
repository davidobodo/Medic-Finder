import React from 'react';

import Header from '../Header';

import { useLayoutStyles } from './style';
import { LayoutProps } from './type';

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const classes = useLayoutStyles();

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>{children}</div>
		</div>
	);
};

export default Layout;
