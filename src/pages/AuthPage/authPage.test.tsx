import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SignUp from './signUp/signUp';
import Login from './login/login';

afterEach(cleanup);

//--------------------------------------------------------------
// signup form tests
//--------------------------------------------------------------

const signUpProps = {
	onRequireLogin: jest.fn()
};

it('should take a snapshot', () => {
	const app = (
		<Provider store={store}>
			<SignUp {...signUpProps} />
		</Provider>
	);
	const { container } = render(app);
	expect(container).toMatchSnapshot();
});
