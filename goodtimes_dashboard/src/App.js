import React from "react";
import Login from "./Login";
import DashBoard from "./DashBoard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./AdminRoutes";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div>
      <div className=" block xl:hidden bg-slate-100 h-[100vh]">
        <div className=" grid place-content-center p-6 h-full">
          <p className=" font-semibold text-3xl">
            Please Open Dashboard in Larger screen to use
          </p>
        </div>
      </div>
      <div className=" hidden xl:block">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/admin" element={<PrivateRoute></PrivateRoute>}>
              <Route path="dashboard" element={<DashBoard></DashBoard>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
