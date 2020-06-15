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

const app = (
	<Provider store={store}>
		<SignUp {...signUpProps} />
	</Provider>
);

it('should take a snapshot', () => {
	const { container } = render(app);
	expect(container).toMatchSnapshot();
});

it('First name should change input value', () => {
	const input = render(app).queryByPlaceholderText('First Name') as HTMLInputElement;
	fireEvent.change(input, { target: { value: 'rukky' } });
	expect(input.value).toBe('rukky');
});
