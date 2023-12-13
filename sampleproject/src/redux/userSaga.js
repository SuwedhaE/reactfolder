import { call, put, takeLatest } from 'redux-saga/effects'
import { addUserApi, listUsersApi } from './api';

function* listUsersSaga() {
    try{
        const users = yield call(listUsersApi.fetchUsers);     //calling api
        yield put({                                             //dispatch success action
            type : 'LIST_USERS_SUCCESS',
            payload: users
        });
    }catch (error) {                                            //dispatch error action
        yield put({
            type: 'LIST_USERS_ERROR',
            error: error.message
        });
    }
}

function* addUserSaga(){
    try {
        const user = yield call(addUserApi.addUser);
        yield put ({
            type: 'ADD_USER_SUCCESS',
            payload: user
        });
    }catch(error) {
        yield put ({
            type: 'ADD_USER_ERROR',
            error: error.message,
        })
    }
}

function* addAddressSaga(){
    try {
        const address = yield call(addUserApi.addAddress);
        yield put ({
            type: 'ADD_ADDRESS_SUCCESS',
            payload: address,
        });
    }catch(error) {
        yield put ({
            type: 'ADD_ADDRESS_ERROR',
            error: error.message,
        })
    }
}


function* userSaga() {
    yield takeLatest('LIST_USERS', listUsersSaga);
    yield takeLatest('ADD_USER', addUserSaga);
    yield takeLatest('ADD_ADDRESS', addAddressSaga);
}

export default userSaga;