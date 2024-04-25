const baseurl = "https://finalyeartyproject-production.up.railway.app";
// const baseurl = "http://localhost:5000";
const adminAuth = localStorage.getItem("adminAuth");
export const loginAPi = (value) => {
  return fetch(`${baseurl}/api/v1/admin/Adminlogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
};

export const AuthCheck = (token) => {
  return fetch(`${baseurl}/api/v1/admin/admin-auth`, {
    headers: {
      Authorization: token,
    },
  });
};

export const getAllProducts = () => {
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/product/get-product"
    // "http://localhost:5000/api/v1/product/get-product"
    // {
    //   headers: {
    //     Authorization: adminAuth.token,
    //   },
    // }
  );
};

export const postProducts = (formData, token) => {
  console.log(token);
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/product/create-product",
    // "http://localhost:5000/api/v1/product/create-product",
    {
      method: "POST",
      headers: {
        // "content-type": "multipart/form-data",
        Authorization: token,
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  );
};

export const createCategory = (value, token) => {
  console.log(token);
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/category/create-category",
    // "http://localhost:5000/api/v1/category/create-category",
    {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    }
  );
};

export const getCategory = async () => {
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/category/get-category"
    // "http://localhost:5000/api/v1/category/get-category"
  );
};

export const getAllUser = async (token) => {
  return fetch(`${baseurl}/api/v1/admin/all-users`, {
    headers: {
      Authorization: token,
    },
  });
};

export const deleteUserById = async (id, token) => {
  console.log(id);
  return fetch(`${baseurl}/api/v1/admin/delete-user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
};

export const getTotalCountDashboard = async (token) => {
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/admin/all-total-count",
    // "http://localhost:5000/api/v1/admin/all-total-count",
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const getAllOrder = async (token) => {
  return fetch(
    "https://finalyeartyproject-production.up.railway.app/api/v1/admin/getAllOrders",
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const postorderstatus = (value, token) => {
  return fetch(`${baseurl}/api/v1/admin/update-order-status`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
};

export const deleteprodapi = (value, token) => {
  return fetch(`${baseurl}/api/v1/product/delete-product/${value}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
};
