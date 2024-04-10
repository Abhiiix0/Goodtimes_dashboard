import { useState, useContext, useEffect, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("adminAuth");
    if (data) {
      const parsedata = JSON.parse(data);
      setauth({
        ...auth,
        user: parsedata.user,
        token: parsedata.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setauth]}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
