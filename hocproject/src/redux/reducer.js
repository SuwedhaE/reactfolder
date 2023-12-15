import * as types from "./actionTypes";

const initialState = {
  // users: [],
  loading: false,
  formData : [],
  // isFormSubmitted: false,
  basicInfo: { 
    name:'',
    email: '',
    phone:'',
  },
  addressInfo: {
    city:'',
    state:'',
    country:'',
  },
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
      return {...state};
    case types.LOAD_ADDRESS_START:
      return {...state};
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        formValues: action.payload,
      };
      case types.CREATE_USER_START:
        console.log("CREATE_USER_START :", action);
        console.log("state.formValues", state.formValues);
        const updatedFormValues = [...state.formValues, action.payload];
        console.log("updatedFormValues", updatedFormValues);
      
        return {
          ...state,
          loading: false,
          formValues: updatedFormValues,
        };

        case types.CREATE_ADDRESS_START:
          console.log("Address update :", action);
          const { name, address } = action.payload;
        
          const updatedUsers = state.formValues.map((user) => {
            if (user.name === name) {
              return {
                ...user,
                address: {
                  ...user.address,
                  ...address,
                },
              };
            }
            return user;
          });
        
          return {
            ...state,
            loading: false,
            formValues: updatedUsers,
          };
        
      
    // case types.CREATE_USER_START:
    //   console.log("CREATE_USER_START :", action);
    //   debugger;
    //   console.log("state.users", state.formValues);
    //   let tempUsers = state.formValues.push(action.payload);
    //   console.log("tempUsers", tempUsers);

    //   return {
    //     ...state,
    //     loading: false,
    //     ...state.formValues.push(action.payload),
    //   };

    // case types.CREATE_ADDRESS_START:
    //   console.log("Address update :", action);
    //   // let userInfo =  state.users.find((item) => item.name === action.payload.name);
    //   // let userInfo = state.formValues.map((uInfo) => {
    //   //   if (action.payload.name === uInfo.name) {
    //   //     return {
    //   //       ...uInfo,
    //   //       address: {
    //   //         city: action.payload.address.city,
    //   //         state: action.payload.address.state,
    //   //         country: action.payload.address.country,
    //   //       },
    //   //     };
    //   //   }
    //   //   return uInfo;
    //   // });
    //   return {
    //     ...state,
    //     loading: false,
    //     formValues: action.payload,
    //   }

    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
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
        formValues: state.formValues.filter((item) => item.id !== action.payload),
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

    case types.SUBMIT_BASIC_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case types.SUBMIT_ADDRESS_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case types.STORE_FORM_DATA :
      return {
        ...state,
        formValues: [...state.formValues, action.payload],
      };
    case types.STORE_COMBINED_FORM_VALUES:
      return {
        ...state,
        formValues: [...state.formValues, action.payload],
      }
    case types.SUBMIT_COMBINED_FORM:
      const { basicInfo, addressInfo } = action.payload;
      const combinedFormData = {
        basicInfo,
        addressInfo,
      };
      return{
        ...state,
        formValues: [...state.formValues, combinedFormData],
      };
    default:
      return state;
  }
};

export default userReducer;
