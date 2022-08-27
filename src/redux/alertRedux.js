import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  alert : {
    show : false,
    message : "",
    status : ""
    // accepted || rejected
  }
};

export const alertReducer = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlertGlobal: (state, action) => {
        state.alert  = action.payload
    }
  },
});

const toggleShows = (alert) => (dispatch) => {
  dispatch(
    setAlertGlobal({
      ...alert,
      show: !alert,
    })
  );
};
export {toggleShows}
export const {setAlertGlobal } = alertReducer.actions;
export default alertReducer.reducer;
