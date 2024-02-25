import React from "react";

const HomeBanner2 = ({ title, subtitle, imgurl1, imgurl2 }) => {
  return (
    <>
      <section className=" flex w-full justify-center">
        <div className=" w-[1250px] h-fit px-3 lg:px-6">
          <div className=" text-center w-full flex flex-col justify-center items-center">
            <h2 className=" font-semibold text-[18px] md:text-[26px]">
              {title}
            </h2>
            <p className=" font-normal text-gray-700 text-[12px] md:text-[16px]">
              {subtitle}
            </p>
            <div className=" h-[3px] w-10 bg-red-500 mt-3 md:mt-4"></div>
          </div>
          <div
            className="flex justify-center  w-full h-fit mt-6 md:mt-10"
            style={{ gap: imgurl2 && imgurl1 ? "12px" : "0px" }}
          >
            <div>
              <img src={imgurl1} className=" rounded-sm w-full h-fit" alt="" />
            </div>
            <div className="">
              <img src={imgurl2} className=" rounded-sm w-full h-fit" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner2;
