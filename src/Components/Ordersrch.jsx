import React, { useEffect, useState } from "react";
import { Modal, Select, message } from "antd";
import { useForm } from "react-hook-form";
import { postorderstatus } from "../Api/Api";

const Ordersrch = ({ open, cancel, setdata }) => {
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));
  const [orderdata, setorderdata] = useState();
  // console.log(data);
  //   useEffect(() => {
  //     setstatus(data);
  //   }, []);
  //   const { handleSubmit, register, reset, errors, setValue } = useForm();

  const handelupdatestatus = async (value) => {
    try {
      const ress = await fetch(
        `https://finalyeartyproject-production.up.railway.app/api/v1/admin/search-user-order/${value}`,
        {
          method: "GET",
          headers: {
            Authorization: adminAuths.token,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await ress.json();
      setdata(data.order);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal open={open} onCancel={() => cancel()} footer={false}>
        {" "}
        <div className="flex my-5 flex-col gap-2">
          <input
            type="text"
            className=" w-full p-2 bg-slate-200"
            onChange={(e) => setorderdata(e.target.value)}
          />
          <button
            onClick={() => handelupdatestatus(orderdata)}
            className=" bg-blue-500 py-2 w-full text-white rounded-md"
          >
            Search
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Ordersrch;
