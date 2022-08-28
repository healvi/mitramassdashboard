import { Button, Modal, Space, Table } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getcustomer } from "../../redux/customer";
import {
  EditFilled,
  RestFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Alerts, Loading, ModalCustomer } from "../../components";

const Customer = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState({
    isOpen: false,
    modal: "update",
    data: {},
  });
  const alert = useSelector((state) => state.alerts.alert);

  const customer = useSelector((state) => state.customers.customers);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Job",
      dataIndex: "job_title",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Telfon",
      dataIndex: "phone_number",
    },
    {
      title: "Address",
      dataIndex: "address",
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Country",
      dataIndex: "country",
      onFilter: (value, record) => record.country.indexOf(value) === 0,
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Active",
          value: true,
        },
        {
          text: "In Active",
          value: false,
        },
      ],
      sorter: (a, b) => a.status - b.status,
      sortDirections: ["ascend", "descend"],
      onFilter: (value, record) =>
        record.status.toString().indexOf(value.toString()) === 0,
      render: (text, record, index) => (
        <p>{record.status ? "Active" : "In Active"}</p>
      ),
    },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      render: (text, record, index) => (
        <div>
          <EditFilled
            style={{
              fontSize: "20px",
              color: "#08c",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() =>
              setVisible({ modal: "update", isOpen: true, data: record })
            }
          />
          <RestFilled
            style={{
              fontSize: "20px",
              color: "#f5222d",
              cursor: "pointer",
            }}
            onClick={() => confirmDelete(record)}
          />
        </div>
      ),
    },
  ];
  const datapush = async (data) => {
    const { id } = data;
    await dispatch(deleteCustomer({ id: id }));
  };
  const confirmDelete = (data) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "APakah Benar Anda Ingin Menghapus ini",
      okText: "Oke",
      cancelText: "Cancel",
      onOk: () => datapush(data),
    });
  };
  useEffect(() => {
    dispatch(getcustomer());
  }, [dispatch]);

  return (
    <div className="customer-container">
      {customer.length ? (
        <>
          <Alerts data={alert} />
          <Space style={{ marginBottom: 16, marginTop: 16 }}>
            <Button
              onClick={() => setVisible({ modal: "create", isOpen: true })}
              className="btn-create"
            >
              Create New Data
            </Button>
          </Space>
          <Table
            columns={columns}
            dataSource={customer}
            rowKey="id"
            scroll={{
              x: 1300,
            }}
          />
        </>
      ) : (
        <Loading />
      )}
      <ModalCustomer visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Customer;
