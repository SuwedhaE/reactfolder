import { ADD_ADDRESS, ADD_USER, DELETE_USER, LIST_USERS, UPDATE_ADDRESS, UPDATE_USER } from "./actionTypes";

const initialState = {
    users : [],
    addresses : [],
    error : null
};

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case LIST_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case ADD_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };
        case UPDATE_USER:
            return {
                ...state,
                users : state.users.map((user) => user.id === action.payload.userId ? {
                    ...user, ...action.payload.updatedData
                } : user),
            };
        case UPDATE_ADDRESS:
            return {
                ...state,
                addresses : state.addresses.map((address) => address.id === action.payload.addressId ? {
                    ...address, ...action.payload.updatedAddressData
                } : address),
            };
        case DELETE_USER:
            return {
                ...state,
                // users: state.users.filter((user) => useDebugValue.id !== action.payload),
            };
        default:
            return state;
    }

};

export default userReducer;