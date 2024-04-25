import React from "react";
import { Modal } from "antd";
const ViewProduct = ({ open, onclose, productdata }) => {
  return (
    <div>
      <Modal open={open} onCancel={() => onclose(false)} footer={false}>
        <div>
          <img src={productdata?.images[0]} className="h-[350px]" alt="" />
          <p className=" font-semibold text-xl">
            Id : <span className=" font-normal">{productdata?._id}</span>
          </p>
          <p className=" font-semibold text-xl">
            Name : <span className=" font-normal">{productdata?.name}</span>
          </p>
          <p className=" font-semibold text-xl">
            Brand : <span className=" font-normal">{productdata?.brand}</span>
          </p>
          <p className=" font-semibold text-xl">
            country_of_origin :{" "}
            <span className=" font-normal">
              {productdata?.country_of_origin}
            </span>
          </p>
          <p className=" font-semibold text-xl">
            category :{" "}
            <span className=" font-normal">{productdata?.category.name}</span>
          </p>
          <p className=" font-semibold text-xl">
            Modelno :{" "}
            <span className=" font-normal">{productdata?.modelno}</span>
          </p>
          <p className=" font-semibold text-xl">
            Price : <span className=" font-normal">{productdata?.price}</span>
          </p>
          <div className=" flex gap-4">
            <p className=" font-semibold text-xl">
              DialColor :{" "}
              <span className=" font-normal">{productdata?.dialcolor[0]}</span>
            </p>
            <p className=" font-semibold text-xl">
              StrapColor :{" "}
              <span className=" font-normal">{productdata?.strapColor[0]}</span>
            </p>
          </div>
          <div>
            <p className=" font-semibold text-xl">Description :</p>
            <div className=" font-normal h-20 overflow-y-scroll text-[15px]">
              {productdata?.description}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewProduct;
