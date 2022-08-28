import { Form, Modal } from "antd";
import React, { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import FormCustomer from "./FormCustomer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createCustomer, updateCustomer } from "../../redux/customer";
import { getNumber } from "../../Utils/getNumber";
const ModalCustomer = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const alert = useSelector((state) => state.alerts.alert);

  useEffect(() => {
    if (!(visible.modal === "create")) {
      form.resetFields();
      form.setFieldsValue({
        ...visible.data,
        phone_number: getNumber(visible.data["phone_number"]),
      });
      console.log("crashh");
    }
  }, [form, visible.data, dispatch]);
  // dispatch, alert, visible, form
  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      const values = await form.validateFields();
      if (visible.modal === "create") {
        Modal.confirm({
          title: "Confirm",
          icon: <ExclamationCircleOutlined />,
          content: "APakah Benar Anda Ingin Membuat ini",
          okText: "Oke",
          cancelText: "Cancel",
          onCancel: () => setConfirmLoading(false),
          onOk: () => datapush(values),
        });
      } else {
        Modal.confirm({
          title: "Confirm",
          icon: <ExclamationCircleOutlined />,
          content: "APakah Benar Anda Ingin Update ini",
          okText: "Oke",
          cancelText: "Cancel",
          onCancel: () => setConfirmLoading(false),
          onOk: () => datapush(values),
        });
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
      setConfirmLoading(false);
    }
  };

  const datapush = async (values) => {
    if (visible.modal === "create") {
      await dispatch(createCustomer(values));
    } else {
      let data = { ...values, id: visible.data.id };
      await dispatch(updateCustomer(data));
    }
    if (!alert.show) {
      setVisible({
        ...visible,
        isOpen: false,
        data: {},
      });
      form.resetFields();
    }
    setConfirmLoading(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setVisible({
      ...visible,
      isOpen: false,
      data: {},
    });
  };

  return (
    <>
      <Modal
        title={visible.modal.toUpperCase()}
        visible={visible.isOpen}
        onOk={handleOk}
        initialValues={{ remember: true }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          autoComplete="off"
        >
          {visible.modal === "update" ? (
            <FormCustomer
              data={visible.data}
              isUpdate={visible.modal === "update"}
            />
          ) : (
            <FormCustomer />
          )}
        </Form>
      </Modal>
    </>
  );
};

export default ModalCustomer;
