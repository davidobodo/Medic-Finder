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
	fireEvent.change(input, { target: { value: 'obodo' } });
	expect(input.value).toBe('obodo');
});

it('Last name should change input value', () => {
	const input = render(app).queryByPlaceholderText('Last Name') as HTMLInputElement;
	fireEvent.change(input, { target: { value: 'david' } });
	expect(input.value).toBe('david');
});

it('Email should change input value', () => {
	const input = render(app).queryByPlaceholderText('email') as HTMLInputElement;
	fireEvent.change(input, { target: { value: 'obodo@enye.com' } });
	expect(input.value).toBe('obodo@enye.com');
});

it('Password should change input value', () => {
	const input = render(app).queryByPlaceholderText('Password') as HTMLInputElement;
	fireEvent.change(input, { target: { value: '123456' } });
	expect(input.value).toBe('123456');
});

it('Confirm Password should change input value', () => {
	const input = render(app).queryByPlaceholderText('Confirm Password') as HTMLInputElement;
	fireEvent.change(input, { target: { value: '7890' } });
	expect(input.value).toBe('7890');
});
