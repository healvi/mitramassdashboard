import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getcustomer } from "../redux/customer";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Alerts, ModalCustomer, Loading, Cards, Navbar } from "../components";
import Checkbox from "../components/atoms/Checkbox";
import { setFavoriteGlobal } from "../redux/favoriteRedux";
const Home = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    active: false,
    inactive: false,
  });
  const [ascend, setAscend] = useState(true);
  const [newCustomer, setNewCustomer] = useState([]);
  const [visible, setVisible] = useState({
    isOpen: false,
    modal: "update",
    data: {},
  });
  let customer = useSelector((state) => state.customers.customers);
  let favorite = useSelector((state) => state.favorites.favorites);
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

    setNewCustomer(filterData(data));
  };
  const filterData = (value) => {
    let datas = [...value];
    const olddata = datas.map((data) => ({
      ...data,
      isFavorite:
        favorite !== undefined
          ? favorite.find((fav) => fav.id === data.id)
            ? true
            : false
          : false,
    }));
    let data = [];
    console.log(status);
    if (status.active && status.inactive) {
      data = olddata;
    } else if (status.active) {
      data = olddata.filter((v) => v.status === true);
    } else if (status.inactive) {
      data = olddata.filter((v) => v.status === false);
    } else {
      data = olddata;
    }

    setNewCustomer(data);
    return data;
  };
  const setFavorite = (data) => {
    dispatch(setFavoriteGlobal({ favorite, data }));
  };
  const searchData = (value) => {
    let olddata = [...customer];
    let data = olddata.filter((obj) =>
      Object.values(obj).some((val) =>
        val ? val.toString().toLowerCase().includes(value) : false
      )
    );
    setNewCustomer(filterData(data));
  };
  useEffect(() => {
    if (!newCustomer.length) {
      dispatch(getcustomer());
      if (customer.length) {
        setNewCustomer(filterData(customer));
      }
    }
    if (customer.length) {
      setNewCustomer(filterData(customer));
    }
    document.title = "Home";
  }, [dispatch, customer, favorite]);
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
          <div>
            <div className="flex my-6 flex-row flex-wrap items-center justify-center">
              <div className="sm:basis-4/4 md:basis-2/4 flex-wrap flex flex-row items-center justify-center">
                <div className="flex mt-2 basis-3/4 space-x-4">
                  <label className="relative block flex-1">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg
                        className="h-5 w-5 fill-slate-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </span>
                    <input
                      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      placeholder="Search for anything..."
                      type="text"
                      onChange={(v) => searchData(v.target.value)}
                      name="search"
                    />
                  </label>
                  <div
                    onClick={() =>
                      setVisible({ modal: "create", isOpen: true })
                    }
                    className="create hover bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current={"page"}
                  >
                    +
                  </div>
                </div>

                <div
                  onClick={() => sortData()}
                  className="sm:text-small mt-2 basis-1/4 text-center mx-3 hover bg-gray-800 text-white px-3 py-3 rounded-md md:text-sm font-medium"
                >
                  <p className="text-small">
                    Sort Name {ascend ? "ASC" : "DSC"}
                  </p>
                </div>

                <Checkbox status={status} setStatus={setStatus} />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            {newCustomer?.map((data, i) => (
              <div className="sm:basis-4/4 md:basis-2/4 lg:basis-1/4 p-4">
                <Cards
                  key={data.id}
                  data={data}
                  confirmDelete={confirmDelete}
                  setVisible={setVisible}
                  setFavorite={setFavorite}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
      <ModalCustomer visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Home;
