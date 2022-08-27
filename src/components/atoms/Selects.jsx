import React from "react";
import { Form, Select } from "antd";
const { Option } = Select;
const Selects = ({
  label,
  name,
  rules = [],
  onChange,
  onSearch,
  previous = [],
  option = [],
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        showSearch
        placeholder="Select Status"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        {option.length ? (
          option.map((v, i) => {
            return (
              <Option key={i} value={v.value}>
                {v.name}
              </Option>
            );
          })
        ) : (
          <Option value="tom">Not One Selected</Option>
        )}
      </Select>
    </Form.Item>
  );
};

export default Selects;
