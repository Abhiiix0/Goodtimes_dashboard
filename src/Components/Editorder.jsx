import React, { useEffect, useState } from "react";
import { Modal, Select, message } from "antd";
import { useForm } from "react-hook-form";
import { postorderstatus } from "../Api/Api";
const Editorder = ({ open, cancel, data }) => {
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));

  const [status, setstatus] = useState(data?.orderStatus);
  console.log(data);
  //   useEffect(() => {
  //     setstatus(data);
  //   }, []);
  //   const { handleSubmit, register, reset, errors, setValue } = useForm();

  const handelupdatestatus = async (e) => {
    e.preventDefault();
    const dataa = {
      orderId: data._id,
      orderStatus: status,
    };
    console.log(dataa);
    try {
      const ress = await postorderstatus(dataa, adminAuths.token);
      const data = await ress.json();
      cancel(false);
      console.log(data);
      //   message.open({
      //     type: "success",
      //     content: "status update sucessfully",
      //   });
    } catch (error) {
      console.log(error);
    }
    setstatus("");
  };
  const handleChange = (value) => {
    console.log(value);
    setstatus(value);
  };
  return (
    <div>
      <Modal open={open} onCancel={() => cancel()} footer={false}>
        {" "}
        <div>
          <form action="" className=" flex w-full gap-3 flex-col mt-5">
            <Select
              className=" w-full"
              defaultValue={data?.orderStatus}
              style={{
                width: "100%",
              }}
              value={status}
              onChange={handleChange}
              options={[
                {
                  value: "pending",
                  label: "Pending",
                },
                {
                  value: "dispatch",
                  label: "Dispatch",
                },
                {
                  value: "shipped",
                  label: "Shipped",
                },
                {
                  value: "out for delivery",
                  label: "Out For Delivery",
                },
                {
                  value: "delivered",
                  label: "Delivered",
                },
                {
                  value: "cancelled",
                  label: "Cancelled",
                },
                {
                  value: "failed",
                  label: "Failed",
                },
              ]}
            />
            <button
              className=" bg-blue-500 rounded-md p-2 text-lg font-semibold w-full text-white"
              onClick={(e) => {
                handelupdatestatus(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Editorder;
