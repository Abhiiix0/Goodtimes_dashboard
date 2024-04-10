import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAuth } from "./ContextFile/Auth";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Products from "./Components/Products";
import Category from "./Components/Category";
import Customers from "./Components/Customers";
import Setting from "./Components/Setting";
import { SettingsInputAntennaSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const [dashboard, setdashboard] = useState(true);
  const [category, setcategory] = useState(false);
  const [products, setproducts] = useState(false);
  const [setting, setsetting] = useState(false);
  const [costomer, setcostomer] = useState(false);
  const [auth, setauth] = useAuth();
  const handelMenuButtons = (menu) => {
    if (menu === "dashboard") {
      setdashboard(true);
      setcategory(false);
      setproducts(false);
      setsetting(false);
      setcostomer(false);
    } else if (menu === "category") {
      setdashboard(false);
      setcategory(true);
      setproducts(false);
      setsetting(false);
      setcostomer(false);
    } else if (menu === "products") {
      setdashboard(false);
      setcategory(false);
      setproducts(true);
      setsetting(false);
      setcostomer(false);
    } else if (menu === "setting") {
      setdashboard(false);
      setcategory(false);
      setproducts(false);
      setsetting(true);
      setcostomer(false);
    } else if (menu === "costomer") {
      setdashboard(false);
      setcategory(false);
      setproducts(false);
      setsetting(false);
      setcostomer(true);
    }
  };

  const logout = () => {
    setauth({
      user: null,
      token: "",
    });
    localStorage.removeItem("adminAuth");
    setInterval(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className=" h-[100vh]">
      <div className=" flex">
        <div className=" bg-blue-600 h-[100vh] flex flex-col gap-2 p-3 w-44 ">
          <div className=" mb-1 overflow-hidden h-[62px] rounded-md">
            <img
              src={require("./goodtimesBlackVersion.jpeg")}
              className="rounded-md w-fit mt-[-08px]"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-between h-full">
            <div className=" flex flex-col gap-3">
              <div
                onClick={() => handelMenuButtons("dashboard")}
                className={`cursor-pointer ${
                  dashboard ? "bg-blue-400" : ""
                } rounded-md hover:bg-blue-400 text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider`}
              >
                <p>
                  <DashboardIcon></DashboardIcon> DashBoard
                </p>
              </div>
              <div
                onClick={() => handelMenuButtons("products")}
                className={`cursor-pointer ${
                  products ? "bg-blue-400" : ""
                } rounded-md hover:bg-blue-400 text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider`}
              >
                <p>
                  {" "}
                  <ShoppingCartIcon></ShoppingCartIcon> Products
                </p>
              </div>
              <div
                onClick={() => handelMenuButtons("category")}
                className={`cursor-pointer ${
                  category ? "bg-blue-400" : ""
                } rounded-md hover:bg-blue-400 text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider`}
              >
                {" "}
                <p>
                  {" "}
                  <CategoryIcon /> Category
                </p>
              </div>
              <div
                onClick={() => handelMenuButtons("costomer")}
                className={`cursor-pointer ${
                  costomer ? "bg-blue-400" : ""
                } rounded-md hover:bg-blue-400 text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider`}
              >
                {" "}
                <p>
                  <SupervisorAccountIcon></SupervisorAccountIcon> Costomers
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <div
                onClick={() => handelMenuButtons("setting")}
                className={`cursor-pointer ${
                  setting ? "bg-blue-400" : ""
                } rounded-md hover:bg-blue-400 text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider`}
              >
                {" "}
                <p>
                  <SettingsIcon></SettingsIcon> Settings
                </p>
              </div>
              <div
                onClick={() => logout()}
                className=" cursor-pointer bg-red-400 rounded-md text-white h-10 flex items-center p-2 pb-2 font-normal text-[16px] tracking-wider"
              >
                <p>
                  <LogoutIcon></LogoutIcon> Logout
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border bg-slate-100 h-[100vh] w-full">
          {dashboard && <Dashboard />}
          {products && <Products />}
          {category && <Category />}
          {costomer && <Customers />}
          {setting && <Setting />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
