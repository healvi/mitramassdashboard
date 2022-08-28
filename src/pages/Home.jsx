import React, { useState } from "react";
import Cards from "../components/molekul/Cards";
import Navbar from "../components/molekul/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getcustomer } from "../redux/customer";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Alerts, ModalCustomer } from "../components";
const Home = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(true);
  const [ascend, setAscend] = useState(true);
  const [newCustomer, setNewCustomer] = useState([]);
  const [visible, setVisible] = useState({
    isOpen: false,
    modal: "update",
    data: {},
  });
  let customer = useSelector((state) => state.customers.customers);
  const alert = useSelector((state) => state.alerts.alert);
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
  const sortData = () => {
    let olddata = [...customer];
    let data = [];
    if (ascend) {
      data = olddata.sort((a, b) => a.name.localeCompare(b.name));
      setAscend(!ascend);
    } else {
      data = olddata.sort((a, b) => b.name.localeCompare(a.name));
      setAscend(!ascend);
    }
    setNewCustomer(data);
  };
  const filterData = () => {
    let olddata = [...customer];
    let data = olddata.filter((v) => v.status === status);
    setStatus(!status);
    setNewCustomer(data);
  };
  const searchData = (value) => {
    let olddata = [...customer];
    let data = olddata.filter((obj) =>
      Object.values(obj).some((val) =>
        val ? val.toString().toLowerCase().includes(value) : false
      )
    );
    setNewCustomer(data);
  };
  useEffect(() => {
    dispatch(getcustomer());
    setNewCustomer(customer);
  }, [dispatch]);
  return (
    <>
      <Navbar
        setVisible={setVisible}
        sortData={sortData}
        filterData={filterData}
        searchData={searchData}
        ascend={ascend}
        status={status}
      />
      {newCustomer.length ? (
        <>
          <Alerts data={alert} />
          <div className="flex flex-row flex-wrap">
            {newCustomer?.map((data) => (
              <div className="basis-1/4 p-4">
                <Cards
                  data={data}
                  confirmDelete={confirmDelete}
                  setVisible={setVisible}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
      <ModalCustomer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Home;
