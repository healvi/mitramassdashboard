import React from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/authRedux";
import { Form, Input, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Spinners } from "../../components";
const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    dispatch(authLogin(values));
  };

  return (
    <Row justify="center" align="middle" className="login-container">
      <Col xs={20} sm={20} md={8} lg={8} xl={8}>
        <Form
          name="normal_login"
          className="login-form bg-gray-800"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h5 class="text-xl font-medium text-gray-900 dark:text-white my-4">
            Login
          </h5>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <button
              htmlType="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? <Spinners /> : "Login to your account"}
            </button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
