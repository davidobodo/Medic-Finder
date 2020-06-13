export const setLocalStorage = (payload) => {
    let expirationTime;
    const { idToken, localId, expiresIn, expirationTime: _expirationTime } = payload

    if (expiresIn) {
        expirationTime = new Date().getTime() + (parseInt(expiresIn) * 1000)
    } else {
        expirationTime = JSON.parse(_expirationTime)
    }

    localStorage.setItem('token', idToken)
    localStorage.setItem('localId', localId)
    localStorage.setItem('expirationTime', JSON.stringify(expirationTime))
}


export const getLocalStorage = () => {
    const idToken = localStorage.getItem('token')
    const localId = localStorage.getItem('localId')
    const expirationTime = localStorage.getItem('expirationTime')

    return { idToken, localId, expirationTime }
}


export const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('localId');
    localStorage.removeItem('expirationTime');
}