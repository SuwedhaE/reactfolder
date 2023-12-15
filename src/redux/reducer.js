import * as types from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  basicInfo: {},
  addressInfo: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
      return state;
    case types.LOAD_ADDRESS_START:
    case types.CREATE_USER_START:
      console.log("CREATE_USER_START :", action);
      debugger
      console.log("state.users", state.users);
      let tempUsers = state.users.push(action.payload);
      console.log("tempUsers", tempUsers);
      
      return {
        ...state,
        loading: false,
        ...state.users.push(action.payload),
      };
      
    case types.CREATE_ADDRESS_START:
      console.log("Address update :", action);
      // let userInfo =  state.users.find((item) => item.name === action.payload.name);
      let userInfo = state.users.map((uInfo) => {
        if (action.payload.name == uInfo.name) {
          
              uInfo.address.city= action.payload.address.city;
              uInfo.address.state= action.payload.address.state;
              uInfo.address.country= action.payload.address.country;
            
          console.log("uInfo ;", uInfo);
        }
       
      });
      return {
        ...state,
        loading: false,
        users: userInfo,
      };

    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "SUBMIT_BASIC_INFO":
      return {
        ...state,
        basicInfo: action.payload,
      };
    case "SUBMIT_ADDRESS_INFO":
      return {
        ...state,
        addressInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
