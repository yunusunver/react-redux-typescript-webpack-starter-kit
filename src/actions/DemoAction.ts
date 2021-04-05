import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER } from '.';
import { Dispatch } from '../Globals';
import { UserApi } from '../api';
// import { EventTracker, StorageHelper } from "../utils";
import { StorageHelper } from '../utils';
import { LoginModel } from '../models';

export function login(model: LoginModel) {
    const api = new UserApi();
    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: LOGIN_START });
            const result: any = await api.login(model);
            if (result.status == 200) {
                dispatch({ type: LOGIN_SUCCESS, payload: result.data });
                StorageHelper.setTokenResult(result.data);
            } else {
                dispatch({ type: LOGIN_FAIL, payload: result.message });
            }
        } catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error });
        }
    };
}

export function signOut() {
    return async (dispatch: Dispatch) => {
        try {
            await StorageHelper.onSignOut();
            dispatch({ type: LOGOUT_USER, payload: null });
        } catch (error) {
            console.log({ error: error });
        }
    };
}
