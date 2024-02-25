import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Products = ({ data, type }) => {
  return (
    <>
      <div className="group  overflow-hidden w-[48%] sm:w-[280px] rounded-md   hover:shadow-lg cursor-pointer h-fit ">
        <div className=" relative w-full  flex flex-col justify-end  overflow-hidden items-center rounded-md h-fit sm:h-[415px]">
          <img
            src={data.images}
            className=" w-fit sm:w-[263px] relative transition-all duration-150 easy-linear sm:rounded-md sm:group-hover:w-[280px] group-hover:rounded-none"
            alt=""
          />
          <div className=" absolute flex justify-between items-center sm:px-2 pt-0 sm:pt-4 top-3 sm:top-5 left-0 h-fit w-full ">
            {type === "New" ? (
              <div
                className="[polygon(0 55%, 80% 55%, 100% 100%, 25% 100%, 0 100%)
] w-fit h-5 sm:h-6 bg-red-600 rounded-tr-[50px] text-[12px] sm:text-sm pl-2 pr-4 sm:pr-5 flex justify-center  items-center font-semibold text-white"
              >
                New Arrival
              </div>
            ) : (
              ""
            )}
            {type === "best" ? (
              <div
                className="[polygon(0 55%, 80% 55%, 100% 100%, 25% 100%, 0 100%)
] w-fit h-5 sm:h-6 bg-gray-500 rounded-tr-[50px] text-[12px] sm:text-sm pl-2 pr-4 sm:pr-5 flex justify-center  items-center font-semibold text-white"
              >
                Best Seller
              </div>
            ) : (
              ""
            )}
            {type === "" ? (
              <div
                className="[polygon(0 55%, 80% 55%, 100% 100%, 25% 100%, 0 100%)
] w-fit h-5 sm:h-6 bg-transparent rounded-tr-[50px] text-[12px] sm:text-sm pl-2 pr-4 sm:pr-5 flex justify-center  items-center font-semibold text-white"
              ></div>
            ) : (
              ""
            )}

            <div className=" rounded-full h-7 w-7 flex justify-center items-center bg-slate-200 mr-4">
              <FavoriteIcon fontSize="md" color="error" />
            </div>
          </div>
          <div className=" mt-2  w-full px-2 sm:px-3 mb-2 sm:mb-4">
            <p className=" font-semibold text-[12px] sm:text-[16px] w-full whitespace-nowrap overflow-hidden text-ellipsis">
              {data.name}
            </p>
            <p className="font-medium text-[12px] sm:text-[16px]">
              ${data.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
