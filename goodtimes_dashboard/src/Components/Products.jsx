import React from "react";
import { Table, Modal } from "antd";
import { getAllProducts, postProducts } from "../Api/Api";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import { useForm } from "react-hook-form";
import {
  DeleteOutline,
  PreviewOutlined,
  ViewAgendaOutlined,
} from "@mui/icons-material";
const Products = () => {
  const formdata = new FormData();
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));
  console.log(adminAuths);
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
    {
      title: "image",
      dataIndex: "image",
      key: "Image",
      render: (_, render) => {
        return <img src={render.images[0]} className=" h-12 w-12"></img>;
      },
    },
    { title: "Name", dataIndex: "name", key: "Name" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div className=" flex gap-2">
            {" "}
            <button className=" bg-blue-600 h-8 w-8 rounded-md">
              <PreviewOutlined
                style={{ color: "white" }}
                fontSize="small"
              ></PreviewOutlined>
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
  useEffect(() => {
    const allProducts = async () => {
      const res = await getAllProducts();
      const data = await res.json();
      console.log(data);
      setproducts(data.products);
    };

    allProducts();
  }, []);

  const addNewProductForm = async (data) => {
    formdata.append("name", name);
    formdata.append("images", data.images);

    if (data.name === "") {
      console.log("please enter name");
    } else {
      console.log(data);
      const res = await postProducts(formdatam, adminAuths.token);
      const datas = await res.json();
      console.log(datas); //jj
    }
  };
  return (
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
            onSubmit={handleSubmit(addNewProductForm)}
            className=" flex flex-col gap-1"
          >
            <div className=" flex gap-2">
              <div className="w-full flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label htmlFor="name">Categpry</label>
                <input
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <div className="w-full flex flex-col">
                <label htmlFor="name">Brand</label>
                <input
                  {...register("brand")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label htmlFor="name">Model No</label>
                <input
                  {...register("modelno")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>

              <div className=" w-full flex flex-col">
                <label htmlFor="name">Price</label>
                <input
                  {...register("price")}
                  type="Number"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
            </div>

            <div className=" flex gap-2">
              <div className="w-full flex flex-col">
                <label htmlFor="name">Country Of Origin</label>
                <input
                  {...register("country_of_origin")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label htmlFor="name">Gender</label>
                <input
                  {...register("gender")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>

              <div className=" w-full flex flex-col">
                <label htmlFor="name">Slug</label>
                <input
                  {...register("slug")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
            </div>

            <div className=" flex gap-2">
              <div className="w-full flex flex-col">
                <label htmlFor="name">Dial Color</label>
                <input
                  {...register("dialcolor")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
              <div className=" w-full flex flex-col">
                <label htmlFor="name">Strap Color</label>
                <input
                  {...register("strapcolor")}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>

              <div className=" w-full flex flex-col">
                <label htmlFor="name">Warranty</label>
                <input
                  {...register("warrenty")}
                  type="Number"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
            </div>
            <div className=" flex gap-2">
              <div className="w-full flex flex-col">
                <label htmlFor="name">Description</label>
                <textarea
                  {...register("description")}
                  rows={4}
                  type="text"
                  className="border p-2 bg-slate-100 rounded-md"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className=" font-semibold">Upload Product Images</p>
              <div className=" flex gap-2">
                {/* <input type="file" name="" id="" />
              <input type="file" name="" id="" /> */}
                {/* <input type="file" name="" {...register("images")} id="" /> */}

                <input
                  type="file"
                  name="images"
                  {...register("images")}
                  id="images"
                />
              </div>
              <div className=" flex gap-2">
                {/* <input type="file" name="" id="" />
              <input type="file" name="" id="" /> */}
                {/* <input type="file" name="" {...register("images[2]")} id="" /> */}

                {/* <input type="file" name="" {...register("images[3]")} id="" /> */}
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
  );
};

export default Products;
