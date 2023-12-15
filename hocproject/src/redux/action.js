import * as types from "./actionTypes"

export const loadUsersStart = (basicInfo) => ({
    type: types.LOAD_USERS_START,
    // payload: basicInfo,
});

export const loadAddressStart = (addressInfo) => ({
    type: types.LOAD_ADDRESS_START,
    // payload: addressInfo,
});

export const loadUsersSuccess = (formValues) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: formValues,
});

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
});

export const createAddressStart = (address) => ({
    type: types.CREATE_ADDRESS_START,
    payload: address,
});

export const createUserSuccess = (userData) => ({
    type: types.CREATE_USER_SUCCESS,
    payload: userData,
});

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
});

export const deleteUserStart = (userID) => ({
    type: types.DELETE_USER_START,
    payload: userID,
});

export const deleteUserSuccess = (userID) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userID,
});

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});

export const updateUserStart = (userInfo) => ({
    type: types.UPDATE_USER_START,
    payload: userInfo,
});

export const updateUserSuccess = (userID) => ({
    type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error,
});

export const submitBasicInfo = (formData) => ({
    type: types.SUBMIT_BASIC_INFO,
    payload: formData,
});
   
export const submitAddressInfo = (formData) => ({
    type: types.SUBMIT_ADDRESS_INFO,
    payload: formData,
});

export const storeFormData = (formValues) => ({
    type: types.STORE_FORM_DATA,
    payload: formValues,
});

export const submitCombinedForm = (basicInfo, addressInfo) => ({
    type: types.SUBMIT_COMBINED_FORM,
    payload: { basicInfo, addressInfo },
});

export const storeCombinedFormValues = (combinedFormData) => ({
    type: types.STORE_COMBINED_FORM_VALUES,
    payload: combinedFormData,
});