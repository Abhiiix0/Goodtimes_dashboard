import React, { useState } from "react";
import Products from "../components/Products";
import { products } from "../ProductsData";
const Store = () => {
  const [datas, setdatas] = useState(products);
  const [hide, sethides] = useState(false);

  return (
    <>
      <section className="px-3 lg:px-7 relative">
        <div className=" flex h-fit relative">
          <div
            className={
              hide
                ? "px-3 md:px-0 h-full bottom-0 fixed z-10 md:static md:block bg-white left-0 md:z-0 w-full md:w-[220px] xl:w-[250px] border-r-2 pr-3 lg:pr-6"
                : "px-3 md:px-0 h-full bottom-0 fixed hidden z-10 md:static md:block bg-white left-0 md:z-0 w-full md:w-[220px] xl:w-[250px] border-r-2 pr-3 lg:pr-6"
            }
          >
            <div className="border-b-2 border-red-500 flex items-center justify-between h-16">
              <p className=" text-xl">Filter</p>
              <button className=" text-red-500 font-semibold text-sm uppercase md:pr-3 lg:pr-0">
                Reset
              </button>
            </div>

            <div className=" flex flex-col  py-4">
              <p className=" mb-3 text-sm font-semibold tracking-wider text-gray-500">
                PRICE
              </p>
              <div className=" pl-1 flex flex-col gap-2">
                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="price"
                    id="99"
                  />
                  <label className="px-4" htmlFor="99">
                    $1 - $99
                  </label>
                </div>
                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="price"
                    id="149"
                  />
                  <label className="px-4" htmlFor="149">
                    $99 - $149
                  </label>
                </div>
                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="price"
                    id="200"
                  />
                  <label className="px-4" htmlFor="200">
                    $150 - $200
                  </label>
                </div>
              </div>
            </div>
            <div className=" py-4">
              <p className=" mb-3 text-sm font-semibold tracking-wider text-gray-500">
                SIZE
              </p>
              <div className="pl-1 flex flex-col gap-2">
                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="size"
                    id="xs"
                  />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="xs"
                  >
                    XS
                  </label>
                </div>
                <div className=" flex items-center">
                  <input className=" h-4 w-4" type="radio" name="size" id="s" />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="s"
                  >
                    S
                  </label>
                </div>

                <div className=" flex items-center">
                  <input className=" h-4 w-4" type="radio" name="size" id="m" />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="m"
                  >
                    M
                  </label>
                </div>

                <div className=" flex items-center">
                  <input className=" h-4 w-4" type="radio" name="size" id="l" />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="l"
                  >
                    L
                  </label>
                </div>

                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="size"
                    id="xl"
                  />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="xl"
                  >
                    XL
                  </label>
                </div>

                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="size"
                    id="2xl"
                  />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="2xl"
                  >
                    2XL
                  </label>
                </div>

                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="size"
                    id="3xl"
                  />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="3xl"
                  >
                    3XL
                  </label>
                </div>

                <div className=" flex items-center">
                  <input
                    className=" h-4 w-4"
                    type="radio"
                    name="size"
                    id="4xl"
                  />
                  <label
                    className="px-4 text-[14px] tracking-widest"
                    htmlFor="4xl"
                  >
                    4XL
                  </label>
                </div>
              </div>
            </div>
            <div className="flex absolute left-0 bottom-0 border justify-center items-center w-full">
              <div
                onClick={() => sethides(!hide)}
                className=" text-black border-r-2 text-center w-full flex justify-center items-center py-3"
              >
                CANCEL
              </div>
              <div className="text-red-500 w-full text-center">APPLY</div>
            </div>
          </div>
          <div></div>
          <div className=" fixed md:hidden z-[1] bg-white bottom-0 left-0 w-full">
            <div className="flex border justify-center items-center w-full">
              <div className=" text-red-500 border-r-2 text-center w-full flex justify-center items-center py-3">
                <p>SHOT </p>
              </div>
              <div
                className="text-red-500 w-full text-center"
                onClick={() => sethides(!hide)}
              >
                FILTER
              </div>
            </div>
          </div>
          <div className=" w-full h-fit ">
            <div className=" flex items-center justify-between h-16 pl-3 lg:pl-6">
              <p className=" text-sm font-semibold text-gray-400">
                {" "}
                Home &gt; T-shirt
              </p>
            </div>
            {/* <div className="p-5 border flex justify-center items-center"> */}
            <div className=" md:p-5 flex flex-wrap gap-3 items-center justify-evenly h-fit">
              {datas.map((item) => (
                <Products data={item} type=""></Products>
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
