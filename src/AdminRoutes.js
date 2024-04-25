import { useState, useEffect } from "react";
import { useAuth } from "./ContextFile/Auth";
import { AuthCheck } from "./Api/Api";
import Spinner from "./Spinner";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const [ok, setok] = useState(false);
  const [auth, setauth] = useAuth();

  useEffect(() => {
    const authchek = async () => {
      const res = await AuthCheck(auth.token);
      console.log(auth.token);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setok(true);
      } else {
        // console.log("isadmin ok");
        setok(false);
      }
    };
    if (auth?.token) authchek();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner path="" />;
}
