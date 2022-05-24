export const setLocalStorage = (payload) => {
	let expirationTime;
	// "initialExpTime" is the time for the token given initially by firebase auth
	// "_expirationTime" is "initialExpTime" that has been stored in local storage
	const {idToken, localId, expiresIn: initialExpTime, expirationTime: _expirationTime} = payload;

	if (initialExpTime) {
		expirationTime = new Date().getTime() + parseInt(initialExpTime) * 1000;
	} else {
		expirationTime = JSON.parse(_expirationTime);
	}

	localStorage.setItem("token", idToken);
	localStorage.setItem("localId", localId);
	localStorage.setItem("expirationTime", JSON.stringify(expirationTime));
};

export const getLocalStorage = () => {
	const idToken = localStorage.getItem("token");
	const localId = localStorage.getItem("localId");
	const expirationTime = localStorage.getItem("expirationTime");

	return {idToken, localId, expirationTime};
};

export const clearLocalStorage = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("localId");
	localStorage.removeItem("expirationTime");
};
//---------------------------------------------------
// CAN BE S=USED TO STORE ANYTHING IN LOCAL STORAGE
//---------------------------------------------------
export const setLocalStorageItem = (identifier: string, payload) => {
	localStorage.setItem(identifier, JSON.stringify(payload));
};

export const clearLocalStorageItem = (identifier: string) => {
	localStorage.removeItem(identifier);
};

export const getLocalStorageItem = (identifier: string) => {
	const info = localStorage.getItem(identifier);
	if (info) {
		return JSON.parse(info);
	} else {
		return null;
	}
};
//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------

export const handleCheckEmailValidity = (value) => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);

export const convertTimeStampToDate = (seconds, nanoseconds) => {
	const secToMilli = seconds * 1000;
	const nanoToMilli = nanoseconds / 1000000;
	const totalMilli = secToMilli + nanoToMilli;

	return new Date(totalMilli);
};
