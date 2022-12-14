import { createSlice } from "@reduxjs/toolkit";
import {
  getSession,
  saveAuthSession,
} from "../Utils/Session";
import { axioscall } from "../Utils/axios";
const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
    passwordverify: "",
  },
  user: {},
  id: "",
  isAuth: false,
};
export const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    setIsauth: (state, action) => {
      state.isAuth = action.payload;
    },
    updateForm: (state, action) => {
      console.log(action.payload.target);
      let { name, value } = action.payload.target;
      state.form = {
        ...state.form,
        [name]: value,
      };
    },
  },
});



const authLogin = (form) => async (dispatch) => {
  await axioscall.post('/auth/login', form).then((response) => {
    dispatch(getUser(response.data))
    const token = getSession("token");
    if (token === undefined || token === null) {
      window.location.reload()
    }
    saveAuthSession(response.data)
  
  }).catch((e) => {
    console.log(e);
  })
}

export { authLogin };
export const {
  updateForm,
  getUser,
  setIsauth,

} = userReducer.actions;
export default userReducer.reducer;
