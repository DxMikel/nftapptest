let initialvalue = {
  user: null,
  signupEmail: "",
  signupPhone: "",
};

const authReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case "login_Successfully":
      return {
        ...state,
        user: action.payload,
      };

    case "set_signup_email":
      return {
        ...state,
        signupEmail: action.payload,
      };
    case "set_signup_phone":
      return {
        ...state,
        signupPhone: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
