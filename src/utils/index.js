export const setLocalStorage = (payload) => {
	let expirationTime;
	// "initialExpTime" is the time for the token given initially by firebase auth
	// "_expirationTime" is "initialExpTime" that has been stored in local storage
	const { idToken, localId, expiresIn: initialExpTime, expirationTime: _expirationTime } = payload;

	if (initialExpTime) {
		expirationTime = new Date().getTime() + parseInt(initialExpTime) * 1000;
	} else {
		expirationTime = JSON.parse(_expirationTime);
	}

	localStorage.setItem('token', idToken);
	localStorage.setItem('localId', localId);
	localStorage.setItem('expirationTime', JSON.stringify(expirationTime));
};

export const getLocalStorage = () => {
	const idToken = localStorage.getItem('token');
	const localId = localStorage.getItem('localId');
	const expirationTime = localStorage.getItem('expirationTime');

	return { idToken, localId, expirationTime };
};

export const clearLocalStorage = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('localId');
	localStorage.removeItem('expirationTime');
};

export const handleCheckEmailValidity = (value) => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);
