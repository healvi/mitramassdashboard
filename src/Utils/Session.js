import {resultInSeconds} from './getTime'
const SaveSession = (key, value) => {
    sessionStorage.setItem(key, value);
}
const getSession = (key) => {
    return sessionStorage.getItem(key);
}
const deleteSession = (key) => {
    sessionStorage.removeItem(key);
}

const saveAuthSession = (data) => {

    let {access_token, token_type, expires_in} = data
    SaveSession("token", access_token)
    SaveSession("type", token_type)
    SaveSession("experied", resultInSeconds + expires_in)
}
const deleteAuthSession = () => {
    deleteSession("token");
    deleteSession("type");
    deleteSession("experied");
}
export {SaveSession, getSession, deleteSession, deleteAuthSession, saveAuthSession}