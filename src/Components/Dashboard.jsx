/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Space, Table } from "antd";
import { getAllOrder, getTotalCountDashboard } from "../Api/Api";
import { render } from "@testing-library/react";
import Editorder from "./Editorder";
import Ordersrch from "./Ordersrch";
import OrderDetails from "./OrderDetails";
import { SearchOutlined } from "@mui/icons-material";
import Highlighter from "react-highlight-words";

const Dashboard = () => {
  function convertTimestampToDateString(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const [singledata, setsingledata] = useState();
  const [filterorder, setfilterorder] = useState(false);
  const [hideorderdetails, sethideorderdetails] = useState(false);
  const [ordertable, setordertable] = useState([]);
  const [allorderdata, setallorderdata] = useState();
  const [editbtn, seteditbtn] = useState(false);
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));
  const [sortedInfo, setSortedInfo] = useState({});

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const column = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      ...getColumnSearchProps("_id"),
    },
    {
      title: "Date",
      dataIndex: "orderDate",
      key: "orderDate",
      render: (_, render) => {
        return (
          <div>
            <div className=" ">
              {convertTimestampToDateString(render?.orderDate)}
            </div>
          </div>
        );
      },
      // ...getColumnSearchProps("orderDate"),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "Quantity",
      render: (_, render) => {
        return (
          <div>
            <div className=" ">{render?.items.length}</div>
          </div>
        );
      },
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      render: (_, render) => {
        return (
          <div>
            {render?.paymentDone ? (
              <div className=" h-4 w-4 bg-green-600 rounded-full"></div>
            ) : (
              <div className=" h-4 w-4 bg-red-600 rounded-full"></div>
            )}
          </div>
        );
      },
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "Price",
      render: (_, render) => {
        return (
          <div>
            <div className=" ">{render?.totalAmount}</div>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (_, render) => {
        return (
          <div>
            <div className=" ">{render?.orderStatus}</div>
          </div>
        );
      },
      filters: [
        {
          text: "pending",
          value: "Pending",
        },
        {
          text: "dispatch",
          value: "dispatch",
        },
        {
          text: "shipped",
          value: "shipped",
        },
        {
          text: "out for delivery",
          value: "out for delivery",
        },
        {
          text: "delivered",
          value: "delivered",
        },
        {
          text: "cancelled",
          value: "cancelled",
        },
        {
          text: "failed",
          value: "failed",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.orderStatus.includes(value),
      width: "30%",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (_, render) => {
        return (
          <div className=" flex gap-2">
            <button
              className=" bg-blue-600 rounded-md p-2 text-white"
              onClick={() => {
                sethideorderdetails(true);
                setallorderdata(render);
              }}
            >
              view
            </button>
            <button
              onClick={() => {
                seteditbtn(true);
                setsingledata(render);
              }}
              className=" bg-blue-600 rounded-md p-2 text-white "
            >
              Edit
            </button>
          </div>
        );
      },
    },
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

  const [total, setTotal] = useState([]);

  const getTotal = async () => {
    const res = await getTotalCountDashboard(adminAuths.token);
    const data = await res.json();
    setTotal(data.total);
    console.log(data);
  };

  const getallorder = async () => {
    const res = await getAllOrder(adminAuths.token);
    const data = await res.json();
    // setTotal(data.total);

    setordertable(data.orders);
    console.log(data);
  };

  useEffect(() => {
    getallorder();
    getTotal();
  }, [editbtn]);
  return (
    <div>
      <Editorder
        open={editbtn}
        cancel={seteditbtn}
        data={singledata}
      ></Editorder>

      <div className=" flex gap-4 justify-between">
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-between  flex-col p-2">
          <p className=" text-2xl font-bold"> {total.customer}</p>
          <p className="  text-xl">Total Customer</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold"> {total.total_Product}</p>
          <p className="  text-xl">Total Products</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">{total.total_category}</p>
          <p className="  text-xl">Categories</p>
        </div>
        <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">{total.total_order}</p>
          <p className="  text-xl">Orders</p>
        </div>
        {/* <div className=" bg-white shadow-sm rounded-md w-full py-5 flex items-center justify-center  flex-col p-2">
          <p className=" text-2xl font-bold">15242</p>
          <p className="  text-xl">Orders</p>
        </div> */}
      </div>
      <div className=" mt-4">
        <p className=" text-lg font-semibold mb-2 uppercase bg-blue-500 p-2c rounded-md text-white w-fit px-5 tracking-wider">
          Orders
        </p>
        <OrderDetails
          open={hideorderdetails}
          sethide={sethideorderdetails}
          data={allorderdata}
        ></OrderDetails>
        <Table
          columns={column}
          dataSource={ordertable}
          pagination={{ pageSize: 5 }}
        ></Table>
      </div>
    </div>
  );
};

export default Dashboard;
