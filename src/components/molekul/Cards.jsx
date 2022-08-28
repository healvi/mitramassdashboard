import React from "react";
import {
  EditFilled,
  RestFilled,
  LikeOutlined,
  LikeFilled,
} from "@ant-design/icons";
const Cards = ({ data, setVisible, confirmDelete, setFavorite }) => {
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
            <h4 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
              {data.name}
            </h4>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {data.country}
            </div>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              {data["phone_number"]}
            </div>

            <div className="flex justify-center lg:pt-2 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-sm font-bold block uppercase tracking-wide text-slate-700">
                  {data["job_title"]}
                </span>
                <span className="text-sm text-slate-400">Job</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-bold block uppercase tracking-wide text-slate-700">
                  {data.status ? "Active" : "In Active"}
                </span>
                <span className="text-sm text-slate-400">Status</span>
              </div>
            </div>
            <div className="flex justify-center lg:pt-2 pt-0 pb-0">
              <div className="p-3 text-center">
                <span className="text-xs font-bold block uppercase tracking-wide text-slate-700">
                  {data.address}
                </span>
                <span className="text-sm text-slate-400">Address</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:pt-2 pt-0 pb-0">
            <h6 className="text-sm mb-1">
              <EditFilled
                style={{
                  fontSize: "20px",
                  color: "#08c",

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
                  marginLeft: "15px",
                }}
                onClick={() => confirmDelete(data)}
              />
              {data.isFavorite ? (
                <LikeFilled
                  style={{
                    fontSize: "20px",
                    color: "#287600",
                    cursor: "pointer",
                    marginLeft: "15px",
                  }}
                  onClick={() => setFavorite(data)}
                />
              ) : (
                <LikeOutlined
                  style={{
                    fontSize: "20px",
                    color: "#287600",
                    cursor: "pointer",
                    marginLeft: "15px",
                  }}
                  onClick={() => setFavorite(data)}
                />
              )}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
