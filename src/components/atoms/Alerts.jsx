import { Alert } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAlertGlobal } from "../../redux/alertRedux";
const Alerts = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setAlertGlobal({
          message: "",
          status: "",
          show: !alert,
        })
      );
    }, 6000);
  }, [data, dispatch]);
  return (
    <div>
      {data.show ? (
        <Alert message={data.message} type={data.status} showIcon />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Alerts;
