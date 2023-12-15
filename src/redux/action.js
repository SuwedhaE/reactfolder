import * as types from "./actionTypes"

export const submitBasicInfo = (basicInfo) => ({
    type: 'SUBMIT_BASIC_INFO',
    payload: basicInfo,
  });
   
  export const submitAddressInfo = (addressInfo) => ({
    type: 'SUBMIT_ADDRESS_INFO',
    payload: addressInfo,
  });
   
//   export const setUserList = (users) => ({
//     type: 'SET_USER_LIST',
//     payload: users,
//   });

export const loadUsersStart = (basicInfo) => ({
    type: types.LOAD_USERS_START,
    payload: basicInfo,
});

export const loadAddressStart = (addressInfo) => ({
    type: types.LOAD_ADDRESS_START,
    payload: addressInfo,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

export const createUserStart = (users) => ({
    type: types.CREATE_USER_START,
    payload: users,
});

export const createAddressStart = (users) => ({
    type: types.CREATE_ADDRESS_START,
    payload: users,
});

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
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