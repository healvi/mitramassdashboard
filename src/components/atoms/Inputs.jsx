import { Form, Input } from "antd";
import React from "react";

const Inputs = ({ previous, label, name, rules, type = "text" }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input type={type} />
    </Form.Item>
  );
};

export default Inputs;
