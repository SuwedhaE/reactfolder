import { ADD_ADDRESS, ADD_ADDRESS_ERROR, ADD_ADDRESS_SUCCESS, ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER, LIST_USERS, LIST_USERS_ERROR, LIST_USERS_SUCCESS, UPDATE_ADDRESS, UPDATE_USER } from "./actionTypes"

//list
export const listUser = () => ({
    type : LIST_USERS,
})

export const listUserSuccess = (users) => ({
    type : LIST_USERS_SUCCESS,
    payload : users
});

export const listUserError = (error) => ({
    type : LIST_USERS_ERROR,
    payload : error
})

//Add user
export const addUser = (userData) => ({
    type : ADD_USER,
    payload : userData,
});

export const addUserSuccess = (user) => ({
    type : ADD_USER_SUCCESS,
    payload : user,
});

export const addUserError = (error) => ({
    type : ADD_USER_ERROR,
    payload : error,
});

//Add address
export const addAddress = (addressData) => ({
    type : ADD_ADDRESS,
    payload : addressData
})

export const addAddressSuccess = (address) => ({
    type : ADD_ADDRESS_SUCCESS,
    payload : address
})

export const addAddressError = (error) => ({
    type : ADD_ADDRESS_ERROR,
    payload : error
})

//update user
export const updateUser = (userId, updatedUserData) => ({
    type : UPDATE_USER,
    payload : { userId, updatedUserData },
});

export const updateAddress = ( addressId, updateAddressData) => ({
    type : UPDATE_ADDRESS,
    payload : { addressId, updateAddressData },
});

//delete user
export const deleteUser = (userId) => ({
    type : DELETE_USER,
    payload : userId,
});