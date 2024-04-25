import React from "react";
import { useForm } from "react-hook-form";
import { loginAPi } from "./Api/Api";
import { message } from "antd";
import { useAuth } from "./ContextFile/Auth";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();
  const onLoginsubmit = async (value) => {
    try {
      const response = await loginAPi(value);

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      //   // console.log(response);
      // }
      const data = await response.json();
      if (data.success) {
        setauth({ ...auth, user: data.admin, token: data.admin.token });

        console.log("daata", data);
        localStorage.setItem(
          "adminAuth",
          JSON.stringify({ user: data.admin, token: data.admin.token })
        );
        setInterval(() => {
          navigate("/admin/dashboard");
        }, 1000);
      } else {
        message.open({
          type: "error",
          content: data.message,
        });
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
    // console.log(value);
  };
  return (
    <div className=" bg-slate-100 h-[100vh] px-6">
      <div className=" pt-3">
        <img
          src={require("./goodtimesBlackVersion.jpeg")}
          className="rounded-md w-20"
          alt=""
        />
      </div>
      <div className=" flex justify-center flex-col h-[80vh] items-center">
        <div className="  bg-white border w-[320px] rounded-md shadow-md">
          <form
            onSubmit={handleSubmit(onLoginsubmit)}
            className=" flex p-4 flex-col justify-center items-center"
          >
            <h1 className=" font-semibold text-3xl mb-4">Login</h1>
            <div className=" flex flex-col w-full">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                autoComplete="off"
                type="text"
                {...register("email")}
                className=" border rounded-md outline-none bg-slate-100 p-2"
              />
            </div>
            <div className=" flex flex-col w-full mt-3">
              <label htmlFor="email" className="">
                Password
              </label>
              <input
                autoComplete="off"
                type="text"
                {...register("password")}
                className=" border rounded-md outline-none bg-slate-100 p-2"
              />
            </div>
            <p className=" text-sm w-full mt-1">Forget Password ?</p>
            <button
              type="submit"
              className=" my-4 bg-blue-500 rounded-md py-2 text-white text-lg font-medium w-full"
            >
              {" "}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
