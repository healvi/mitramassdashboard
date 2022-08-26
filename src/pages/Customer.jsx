import { Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcustomer } from "../redux/customer";
// address: "Villa Mutiara Gading"
// country: "Indonesia"
// created_at: "2022-07-14T16:31:20.000000Z"
// id: 3703
// job_title: "programmer jago"
// name: "Aliif Arief"
// phone_number: "08953318"
// status: false
// updated_at: "2022-07-15T06:56:03.000000Z"
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
        text: "inactive",
        value: false,
      },
    ],
    sorter: (a, b) => a.status - b.status,
    sortDirections: ["ascend", "descend"],
    onFilter: (value, record) =>
      record.status.toString().indexOf(value.toString()) === 0,
    render: (text, record, index) => (
      <p>{record.status ? "Active" : "inactive"}</p>
    ),
  },
];

const Customer = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.customers);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  useEffect(() => {
    dispatch(getcustomer());
  }, [dispatch]);

  return (
    <div>
      {customer.length ? (
        <Table
          columns={columns}
          dataSource={customer}
          onChange={onChange}
          rowKey="id"
        />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Customer;
