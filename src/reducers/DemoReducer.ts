import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_USER } from '../actions';
import { Dispatcher } from '../Globals';

interface InitialState {
    data: [];
    loading: boolean;
    isAuthenticated: boolean;
    error: string;
}

const initialState: InitialState = {
    data: [],
    loading: false,
    isAuthenticated: false,
    error: '',
};

export default (state: InitialState = initialState, action: Dispatcher): InitialState => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
                error: '',
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                isAuthenticated: true,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error occurred!',
                isAuthenticated: false,
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
