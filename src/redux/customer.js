import { createSlice } from "@reduxjs/toolkit";
import { axiosauth} from "../Utils/axios";
import { setAlertGlobal } from "./alertRedux";
const initialState = {
  customers: {},
  form : {
    name: '',
    address : '',
    country: '',
    phone_number : '',
    job_title: '',
    status:false
  }
  
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

const createCustomer = (form) => async (dispatch) => {
    await axiosauth
    .post("/customers", form)
    .then((response) => {
      dispatch(getcustomer())
             dispatch(setAlertGlobal({
              message: "Data SUceess Create",
              status: "success",
              show: true
          }))
    })
    .catch((e) => {
        dispatch(setAlertGlobal({
              message: "Request Gagal",
              status: "error",
              show: true
          }))
    });
}

const updateCustomer = (form) => async (dispatch) => {
    await axiosauth
    .put("/customers", form)
    .then((response) => {
      dispatch(getcustomer())
             dispatch(setAlertGlobal({
              message: "Data SUceess Update",
              status: "success",
              show: true
          }))
    })
    .catch((e) => {
        dispatch(setAlertGlobal({
              message: "Request Gagal",
              status: "error",
              show: true
          }))
    });
}

const deleteCustomer = (form) => async (dispatch) => {
  console.log(form);
    await axiosauth
    .delete("/customers", { data: form })
    .then((response) => {
      dispatch(getcustomer())
             dispatch(setAlertGlobal({
              message: "Data SUceess Delete",
              status: "success",
              show: true
          }))
    })
    .catch((e) => {
        dispatch(setAlertGlobal({
              message: "Request Gagal",
              status: "error",
              show: true
          }))
    });
}

export { getcustomer, createCustomer, updateCustomer, deleteCustomer };
export const {
  setcustomer,

} = customerReducer.actions;
export default customerReducer.reducer;
