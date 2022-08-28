import { Form, Input } from "antd";
import React from "react";
import { useEffect } from "react";

const Inputs = ({ previous, label, name, rules, type = "text" }) => {
  useEffect(() => {}, [type]);
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input type={type} />
    </Form.Item>
  );
};

export default Inputs;
