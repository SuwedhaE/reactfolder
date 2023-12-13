import * as types from "./actionTypes";
import { loadUsersSuccess, loadUsersError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError, updateUserSuccess, updateUserError, storeFormData, submitAddressInfo, storeCombinedFormValues } from "./action";
import { loadUsersApi, createUserApi, deleteUserApi, updateUserApi } from "./api";

import { takeEvery, fork, all, call, put, delay, takeLatest, take } from "redux-saga/effects";

function* onLoadUsersStartAsync() {
    try{
        const response = yield call(loadUsersApi);
        if(response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    } catch(error) {
        yield put(loadUsersError(error.response.data));
    }
}

function* onLoadAddressStartAsync() {
    try{
        const response = yield call(loadUsersApi);
        if(response.status === 200) {
            yield delay(500);
            yield put(loadUsersSuccess(response.data));
        }
    } catch(error) {
        yield put(loadUsersError(error.response.data));
    }
}

function* onCreateUserStartAsync({payload}) {
    try{
        const response = yield call(createUserApi, payload);
        if(response.status === 200) {
            yield put(createUserSuccess(response.data));
        }
    } catch(error) {
        yield put(createUserError(error.response.data));
    }
}

function* onDeleteUserStartAsync(userId){
    try{
        const response = yield call(deleteUserApi, userId);
        if(response.status === 200) {
            yield delay(500);
            yield put(deleteUserSuccess(userId));
        }
    } catch(error) {
        yield put(deleteUserError(error.response.data));
    }
}

function* onUpdateUserStartAsync({payload: {id, formValue}}) {
    try{
        const response = yield call(updateUserApi, id, formValue);
        if(response.status === 200){
            yield put(updateUserSuccess());
        }
    }catch (error) {
        yield put(updateUserError(error.response.data));
    }
}

function* onDeleteUser(){
    while(true) {
        const {payload : userId} = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, userId)
    }
}

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onLoadAddress() {
    yield takeEvery(types.LOAD_USERS_START, onLoadAddressStartAsync);
}

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onCreateAddress() {
    yield takeLatest(types.CREATE_ADDRESS_START, onCreateUserStartAsync);
}

function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

function* onSubmitBasicInfo(action) {
    try {
        const { formData } = action.payload || {};
    yield put(storeFormData(formData));
    } catch(error) {}
    // yield takeLatest({type: 'SUBMIT_BASIC_INFO', payload: action.payload})
}

function* onSubmitAddressInfo(action) {
    const { formData } = action.payload;
    yield put(storeFormData(formData));
    // yield takeLatest({type: 'SUBMIT_ADDRESS_INFO', payload: action.payload})
}

function* onCombinedFormSubmission(action){
    const { basicInfo, addressInfo } = action.payload;
    const combinedFormData = {
        basicInfo,
        addressInfo,
    };
    yield put(storeCombinedFormValues(combinedFormData));
}

function* watchFormSubmissions() {
    yield takeLatest(types.SUBMIT_BASIC_INFO, onSubmitBasicInfo);
    yield takeLatest(types.SUBMIT_ADDRESS_INFO, onSubmitAddressInfo);
    yield takeLatest(types.SUBMIT_COMBINED_FORM, onCombinedFormSubmission);
}

const userSagas = [fork(onLoadUsers), fork(onLoadAddress), fork(onCreateUser), fork(onCreateAddress), fork(onDeleteUser), fork(onUpdateUser), fork(onSubmitBasicInfo), fork(submitAddressInfo), fork(watchFormSubmissions)];

export default function *rootSaga(){
    yield all([...userSagas ]);
}