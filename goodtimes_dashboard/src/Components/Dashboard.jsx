import React from "react";
import { Table } from "antd";
const Dashboard = () => {
  const column = [
    { title: "Name", dataIndex: "name", key: "Name" },
    { title: "Date", dataIndex: "date", key: "Date" },
    { title: "Quantity", dataIndex: "quantity", key: "Quantity" },
    { title: "Price", dataIndex: "price", key: "Price" },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Pratik Hatankar",
      date: "12/06/2024",
      quantity: 2,
      price: 5000,
    },
    {
      key: "2",
      name: "Rahul Shah",
      date: "18/06/2024",
      quantity: 1,
      price: 8000,
    },
    {
      key: "3",
      name: "Gaurav Tahkur",
      date: "01/06/2024",
      quantity: 5,
      price: 26000,
    },
    {
      key: "4",
      name: "Abhishek Nayak",
      date: "10/07/2024",
      quantity: 1,
      price: 10000,
    },
    {
      key: "5",
      name: "Karan Oza",
      date: "10/07/2024",
      quantity: 8,
      price: 52000,
    },
    {
      key: "4",
      name: "Abhishek Nayak",
      date: "10/07/2024",
      quantity: 1,
      price: 10000,
    },
    {
      key: "5",
      name: "Karan Oza",
      date: "10/07/2024",
      quantity: 8,
      price: 52000,
    },
    {
      key: "4",
      name: "Abhishek Nayak",
      date: "10/07/2024",
      quantity: 1,
      price: 10000,
    },
    {
      key: "5",
      name: "Karan Oza",
      date: "10/07/2024",
      quantity: 8,
      price: 52000,
    },
  ];

  return (
    <div>
      <div className=" flex gap-4 justify-between">
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-between  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Customer</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Total Products</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Categories</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Orders</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Orders</p>
        </div>
      </div>
      <div className=" mt-4">
        <p className=" text-lg font-semibold mb-2 uppercase bg-blue-500 p-2c rounded-md text-white w-fit px-5 tracking-wider">
          Orders
        </p>
        <Table columns={column} dataSource={dataSource}></Table>
      </div>
    </div>
  );
};

export default Dashboard;
