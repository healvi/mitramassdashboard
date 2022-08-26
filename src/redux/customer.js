import { createSlice } from "@reduxjs/toolkit";
import { axiosauth } from "../Utils/axios";
const initialState = {
  customers: {},
};
export const customerReducer = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setcustomer: (state, action) => {
      state.customers = action.payload;
    },
  },
});

const getcustomer = () => async (dispatch) => {
    await axiosauth
    .get("/customers")
    .then((response) => {
      dispatch(setcustomer(response.data.data))
    })
    .catch((e) => {
      console.log(e);
    });
}

export { getcustomer };
export const {
  setcustomer,

} = customerReducer.actions;
export default customerReducer.reducer;
