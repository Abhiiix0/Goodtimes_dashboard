import React, { useRef } from "react";
import { Table, Modal, Button, Space, Input } from "antd";
import {
  createCategory,
  deleteUserById,
  getAllProducts,
  getAllUser,
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
  MailOutlined,
  PreviewOutlined,
  SearchOutlined,
  ViewAgendaOutlined,
} from "@mui/icons-material";
import Highlighter from "react-highlight-words";
const Customers = () => {
  const adminAuths = JSON.parse(localStorage.getItem("adminAuth"));
  const [messageApi, contextHolder] = message.useMessage();
  const [userdata, setuserdata] = useState();
  const { handleSubmit, register, reset, errors } = useForm();
  const [ModalBtn, setModalBtn] = useState(false);

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
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Number",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, render) => {
        return (
          <div className=" flex gap-2">
            {" "}
            <button
              onClick={() => {
                setModalBtn(true);
                setuserdata(render);
              }}
              className=" bg-blue-600 h-8 w-8 rounded-md"
            >
              <EditCalendarOutlined
                style={{ color: "white" }}
                fontSize="small"
              ></EditCalendarOutlined>
            </button>
            <button
              onClick={() => deleteuser(render._id)}
              className=" bg-red-600 h-8 w-8 rounded-md"
            >
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
    const res = await getAllUser(adminAuths.token);
    const data = await res.json();
    console.log(data);
    setproducts(data.users);
  };

  const deleteuser = async (usrid) => {
    try {
      const res = await deleteUserById(usrid, adminAuths.token);
      const data = await res.json();
      console.log(data);
      message.open({
        type: "success",
        content: data.message,
      });
      allgetCategory();
    } catch (error) {
      console.log(error);
      message.open({
        type: "error",
        content: "internal server error",
      });
    }
  };
  useEffect(() => {
    allgetCategory();
  }, []);

  return (
    <div>
      {contextHolder}{" "}
      <div>
        <Modal
          width={700}
          className=" mt-[-50px]"
          footer={false}
          open={ModalBtn}
          onCancel={() => setModalBtn(false)}
        >
          <div>
            <p className=" font-semibold text-xl">
              ID : <span className=" font-normal">{userdata?._id}</span>{" "}
            </p>
            <p className=" font-semibold text-xl">
              NAME : <span className=" font-normal">{userdata?.name}</span>{" "}
            </p>
            <p className=" font-semibold text-xl">
              DOB : <span className=" font-normal">{userdata?.dob}</span>
            </p>
            <p className=" font-semibold text-xl">
              GENDER : <span className=" font-normal">{userdata?.gender}</span>
            </p>
            <p className=" font-semibold text-xl">
              PHONE : <span className=" font-normal">{userdata?.phone}</span>
            </p>
            <p className=" font-semibold text-xl">
              EMAIL : <span className=" font-normal">{userdata?.email}</span>
            </p>
          </div>
        </Modal>
        <div>
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

export default Customers;
