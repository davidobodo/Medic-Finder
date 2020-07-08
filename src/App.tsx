import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";

import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import AuthPage from "./pages/AuthPage";

import {theme} from "./styling/Globals";
import {requestLoginSuccess, requestSignOut} from "./redux/actions/authActions";
import {getLocalStorage} from "./utils";

const ProtectedRoute = ({component: Component, ...rest}) => {
	const userId = useSelector((state) => state.auth.userId);
	return <Route {...rest} render={(props) => (userId ? <Component {...props} /> : <Redirect to={{pathname: "/auth"}} />)} />;
};

ProtectedRoute.propTypes = {
	component: PropTypes.any,
};

const App = () => {
	const dispatch = useDispatch();
	const payload = getLocalStorage();

	//checking linting
	//check if token has expired. If it has then log user out, else allow user to still access application
	if (new Date().getTime() > parseInt(payload.expirationTime)) {
		dispatch(requestSignOut());
	} else if (payload.expirationTime) {
		dispatch(requestLoginSuccess(payload));
	}

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Switch>
						<Route exact path="/auth" component={AuthPage} />
						<ProtectedRoute exact path="/" component={HomePage} />
						<ProtectedRoute exact path="/history" component={HistoryPage} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
