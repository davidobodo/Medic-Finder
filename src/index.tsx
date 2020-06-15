import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

import * as serviceWorker from './serviceWorker';

const Root = (
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
