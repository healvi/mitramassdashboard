import React from "react";
import { Row, Col } from "antd";
import Inputs from "../atoms/Inputs";
import Selects from "../atoms/Selects";
const FormCustomer = ({ data = {}, isUpdate = false }) => {
  return (
    <Row justify="center" align="middle" className="form-container">
      <Col span={24}>
        <Inputs
          previous={isUpdate ? data.name : ""}
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name" }]}
        ></Inputs>
        <Inputs
          previous={isUpdate ? data.address : ""}
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address" }]}
        ></Inputs>
        <Inputs
          previous={isUpdate ? data.country : ""}
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please input your country" }]}
        ></Inputs>
        <Inputs
          previous={isUpdate ? data["job_title"] : ""}
          label="Job"
          name="job_title"
          rules={[{ required: true, message: "Please input your Job" }]}
        ></Inputs>
        <Inputs
          previous={isUpdate ? data["phone_number"] : ""}
          label="Phone Number"
          name="phone_number"
          rules={[
            {
              required: true,
              message: "Please input your phone number",
            },
          ]}
        ></Inputs>
        <Selects
          // previous={isUpdate ? [data.status] : []}
          rules={[
            {
              required: true,
              message: "Please Select Status",
            },
          ]}
          label="Status"
          name="status"
          option={[
            { value: false, name: "In Active" },
            { value: true, name: "Active" },
          ]}
        ></Selects>
      </Col>
    </Row>
  );
};

export default FormCustomer;
