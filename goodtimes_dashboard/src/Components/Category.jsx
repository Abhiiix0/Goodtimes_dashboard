import React from "react";
import { Table, Modal } from "antd";
import {
  createCategory,
  getAllProducts,
  getCategory,
  postProducts,
} from "../Api/Api";
import { message } from "antd";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import {
  DeleteOutline,
  EditAttributesOutlined,
  EditCalendarOutlined,
  PreviewOutlined,
  ViewAgendaOutlined,
} from "@mui/icons-material";
const Category = () => {
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));
  const [messageApi, contextHolder] = message.useMessage();

  const { handleSubmit, register, reset, errors } = useForm();
  const [addNewModalBtn, setaddNewModalBtn] = useState(false);
  const columnss = [
    {
      title: "No",
      dataIndex: "no",
      key: "No",
      render: (_, render, i) => {
        return <div>{i + 1}</div>;
      },
    },

    { title: "Name", dataIndex: "name", key: "Name" },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div className=" flex gap-2">
            {" "}
            <button className=" bg-blue-600 h-8 w-8 rounded-md">
              <EditCalendarOutlined
                style={{ color: "white" }}
                fontSize="small"
              ></EditCalendarOutlined>
            </button>
            <button className=" bg-red-600 h-8 w-8 rounded-md">
              <DeleteOutline
                style={{ color: "white" }}
                fontSize="small"
              ></DeleteOutline>
            </button>
          </div>
        );
      },
    },
  ];
  const [products, setproducts] = useState();
  const allgetCategory = async () => {
    const res = await getCategory();
    const data = await res.json();
    console.log(data);
    setproducts(data.category);
  };

  // const deleteCategory = async () => {
  //   try {
  //     const res = await
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    allgetCategory();
  }, []);

  const addnewcategory = async (data) => {
    try {
      if (data.name === "") {
        console.log("please enter name");
      } else {
        console.log(data);
        const res = await createCategory(data, adminAuths.token);
        const datas = await res.json();
        console.log(datas);
        allgetCategory();
        setaddNewModalBtn(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {contextHolder}{" "}
      <div>
        <Modal
          width={700}
          className=" mt-[-50px]"
          footer={false}
          open={addNewModalBtn}
          onCancel={() => setaddNewModalBtn(false)}
        >
          <div>
            <form
              onSubmit={handleSubmit(addnewcategory)}
              className=" flex flex-col gap-1"
            >
              <div className=" flex gap-2">
                <div className="w-full flex flex-col">
                  <label htmlFor="name">Category Name</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="border p-2 bg-slate-100 rounded-md"
                  />
                </div>
              </div>

              <div className=" mt-2">
                <button
                  type="submit"
                  className=" bg-blue-600 rounded-md p-2 text-white w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <div>
          <div className=" mb-4 flex justify-between w-full">
            <button
              onClick={() => setaddNewModalBtn(true)}
              className="p-2 text-white outline-none bg-blue-600 border rounded-md"
            >
              Add New
            </button>
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 w-[400px] outline-none border-blue-600 border rounded-md"
            />
          </div>
          <Table
            columns={columnss}
            pagination={{ pageSize: 6 }}
            dataSource={products}
          ></Table>
        </div>
      </div>
    </div>
  );
};

export default Category;
