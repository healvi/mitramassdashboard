import React from "react";

const Checkbox = ({ status, setStatus }) => {
  return (
    <>
      <ul className=" mt-2 items-center basis-2/4  w-full mx-3 hover bg-gray-800 text-white px-3 rounded-md  sm:flex ">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="active-checkbox-list"
              type="checkbox"
              onChange={(e) =>
                setStatus({
                  ...status,
                  active: e.target.checked,
                })
              }
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="active-checkbox-list"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Active
            </label>
          </div>
        </li>
        <li className="w-full dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="inactive-checkbox-list"
              type="checkbox"
              value=""
              onChange={(e) =>
                setStatus({
                  ...status,
                  inactive: e.target.checked,
                })
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="inactive-checkbox-list"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              In active
            </label>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Checkbox;
