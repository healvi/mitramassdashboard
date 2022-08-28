import React from "react";
import { EditFilled, RestFilled } from "@ant-design/icons";
const Cards = ({ data, setVisible, confirmDelete }) => {
  return (
    <>
      <div className="border-solid border-2 border-sky-500 relative card-container max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  alt=""
                  src="http://placeimg.com/200/200/people"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20"></div>
          </div>
          <div className="text-center mt-6">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {data.name}
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {data.country}
              <span
                className={`${
                  data.status
                    ? `bg-green-500 dark:bg-green-200`
                    : `bg-red-500 dark:bg-red-200`
                } dark:text-white-900 text-white-800 text-xs font-bold ml-4 mr-2 px-2.5 py-0.5 rounded `}
              >
                {data.status ? "Active" : "In Active"}
              </span>
            </div>
            <h3 className="text-sm mb-1">
              <EditFilled
                style={{
                  fontSize: "20px",
                  color: "#08c",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setVisible({ modal: "update", isOpen: true, data: data })
                }
              />
              <RestFilled
                style={{
                  fontSize: "20px",
                  color: "#f5222d",
                  cursor: "pointer",
                }}
                onClick={() => confirmDelete(data)}
              />
            </h3>
            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-sm font-bold block uppercase tracking-wide text-slate-700">
                  {data["job_title"]}
                </span>
                <span className="text-sm text-slate-400">Job</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-bold block uppercase tracking-wide text-slate-700">
                  {data["phone_number"]}
                </span>
                <span className="text-sm text-slate-400">Number</span>
              </div>
            </div>
            <div className="flex justify-center lg:pt-4 pt-2 pb-0">
              <div className="p-3 text-center">
                <span className="text-xs font-bold block uppercase tracking-wide text-slate-700">
                  {data.address}
                </span>
                <span className="text-sm text-slate-400">Address</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
