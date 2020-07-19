import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import {useLayoutStyles} from "./style";
import {LayoutProps} from "./type";

//All pages asides authPage make use of this layout to define their basic structure
const Layout: React.FC<LayoutProps> = ({children}) => {
	const classes = useLayoutStyles();

	return (
		<div className={classes.root}>
			<Header />
			<div className={classes.body}>{children}</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
