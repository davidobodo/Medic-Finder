import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from './login/login';

afterEach(cleanup);

const LoginProps = {
	onRequireSignUp: jest.fn()
};

const app = (
	<Provider store={store}>
		<Login {...LoginProps} />
	</Provider>
);

//--------------------------------------------------------------
// Snapshot
//--------------------------------------------------------------

it('should take a snapshot', () => {
	const { container } = render(app);
	expect(container).toMatchSnapshot();
});

//--------------------------------------------------------------
// Successfully changing input field values
//--------------------------------------------------------------

it('Email should change input value', () => {
	const input = render(app).queryByPlaceholderText('email') as HTMLInputElement;
	fireEvent.change(input, { target: { value: 'obodo@enye.com' } });
	expect(input.value).toBe('obodo@enye.com');
});

it('Password should change input value', () => {
	const input = render(app).queryByPlaceholderText('password') as HTMLInputElement;
	fireEvent.change(input, { target: { value: '123456' } });
	expect(input.value).toBe('123456');
});
