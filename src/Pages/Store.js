import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import { products } from "../ProductsData";
import { Slider, Checkbox } from "antd";
import { useForm } from "react-hook-form";
import { resetWarned } from "antd/es/_util/warning";
// import { Filter } from "@mui/icons-material";
const Store = () => {
  const [datas, setdatas] = useState(products);
  const [hide, sethides] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [Filter, setFuilters] = useState({
    priceRange: [0, 100000],
    brand: [],
    strapcolor: [],
    dialcolor: [],
  });

  const { register, handleSubmit, reset, resetField } = useForm();
  const onsubmit = (value) => {
    console.log(value);
  };
  // console.log(datas);

  const handelPrice = (value) => {
    setFuilters({ ...Filter, priceRange: [value[0], value[1]] });
    console.log(value);
    console.log(Filter);
  };
  const handelBrandsFilter = (value) => {
    setFuilters({ ...Filter, brand: value });
    console.log(value);
    console.log(Filter);
  };
  const handelStrapFilter = (value) => {
    setFuilters({ ...Filter, strapcolor: value });
    console.log(value);
    console.log(Filter);
  };
  const handelDialFilter = (value) => {
    setFuilters({ ...Filter, dialcolor: value });
    console.log("kk", value);
    console.log(Filter);
  };

  const ResetFun = () => {
    resetField();
    reset();
    setFuilters({
      priceRange: [0, 100000],
      brand: [],
      dialcolor: [],
      strapcolor: [],
    });
  };

  // const dialcolor = ["black"];
  // const strapcolor = ["silver"];
  useEffect(() => {
    // product filter
    const Fproducts = datas.filter((items, it) => {
      const price =
        items.price >= Filter.priceRange[0] &&
        items.price <= Filter.priceRange[1];
      const brand =
        Filter.brand.length === 0 || Filter.brand.includes(items.brand);

      let Scolor =
        Filter.strapcolor.length === 0 ||
        Filter.strapcolor.filter((p) => items.strapcolor.includes(p)).length >
          0;
      let Dcolor =
        Filter.dialcolor.length === 0 ||
        Filter.dialcolor.filter((d) => items.dialcolor.includes(d)).length > 0;
      console.log("dColor", Dcolor);
      // items.dialcolor.some((p) => dialcolor.includes((c) => c === p));
      // items.dialcolor.filter((c) => dialcolor.some(())).length > 0;
      // dialcolor.some((i) => items.dialcolor.includes(i))
      console.log(brand);
      console.log("color", Scolor);
      return price && brand && Scolor && Dcolor;
      // dialcolor.includes(items.dialcolor)
      // dialcolor.filter((i) => items.dialcolor[it] === i)
      // items.dialcolor.filter((c) => dialcolor.includes(c))
      // items.dialcolor === dialcolor
      // );
      // }
    });

    console.log(Fproducts);
    setfilterProducts(Fproducts);
  }, [Filter]);
  const brands = [
    { label: "Casio", value: "Casio" },
    { label: "Fast Track", value: "Fast Track" },
    { label: "Fire Bolt", value: "Fire Bolt" },
  ];

  // remove duplicate value from product and store in strap place
  let strapcoloroptions = [];
  datas.map((s) => {
    strapcoloroptions.push(s.strapcolor);
  });
  strapcoloroptions = strapcoloroptions.flat(1);
  const strapcolorsoptions = strapcoloroptions.filter(
    (s, i) => strapcoloroptions.indexOf(s) === i
  );
  console.log(strapcolorsoptions);

  // remove duplicate from dialcolor data and make a new array
  let dialcoloroptions = [];
  datas.map((d) => dialcoloroptions.push(d.dialcolor));
  dialcoloroptions = dialcoloroptions.flat(1);
  console.log("dialcolor", dialcoloroptions);
  const uniquedialcolor = dialcoloroptions.filter(
    (d, i) => dialcoloroptions.indexOf(d) === i
  );
  console.log("dialcolor", uniquedialcolor);

  return (
    <>
      <section className="px-3 lg:px-7 relative">
        <div className=" flex h-fit relative">
          <div className=" md:border-r-2">
            <div
              className={
                hide
                  ? "px-3 md:px-0 h-full bottom-0 fixed z-10 md:static md:block bg-slate-50 left-0 md:z-0 w-full md:w-[220px] xl:w-[250px] border-r-2 pr-3 lg:pr-6"
                  : "px-3 md:px-0 h-full bottom-0 fixed hidden z-10 md:static md:block bg-white left-0 md:z-0 w-full md:w-[220px] xl:w-[250px] pr-3 lg:pr-6"
              }
            >
              <div className="border-b-2 border-red-500 flex items-center justify-between h-16">
                <p className=" text-xl">Filter</p>
                {Filter.brand.length !== 0 ||
                Filter.priceRange[1] !== 100000 ||
                Filter.priceRange[0] !== 0 ||
                Filter.dialcolor.length !== 0 ||
                Filter.strapcolor.length !== 0 ? (
                  <button
                    onClick={() => ResetFun()}
                    className=" text-red-500 font-semibold text-sm uppercase md:pr-3 lg:pr-0"
                  >
                    Reset
                  </button>
                ) : (
                  ""
                )}
              </div>
              <form action="">
                <div className=" flex flex-col  py-4">
                  <p className=" mb-0 text-sm font-semibold tracking-wider text-gray-500">
                    PRICE
                  </p>
                  <div className=" pl-1 w-[90vw] md:w-full flex flex-col gap-2">
                    <Slider
                      max={100000}
                      min={0}
                      range
                      step={10}
                      {...register("priceRange")}
                      value={Filter.priceRange}
                      onChange={handelPrice}
                    />
                  </div>
                  <div className="flex justify-between mr-2">
                    <span className=" border w-20 py-2 px-2 bg-slate-200 flex items-start rounded-md">
                      <p className=" text-[14px]">Rs {Filter.priceRange[0]}</p>
                    </span>
                    <span className=" border w-[85px] py-2 px-2 bg-slate-200 flex items-start rounded-md">
                      <p className=" text-[14px]">Rs {Filter.priceRange[1]}</p>
                    </span>
                  </div>
                </div>
                <div className=" py-4">
                  <p className="mb-2">Brands</p>
                  <Checkbox.Group
                    options={brands}
                    value={Filter.brand}
                    {...register("Brand")}
                    className=" flex flex-col"
                    onChange={handelBrandsFilter}
                  ></Checkbox.Group>
                </div>
                <div className=" py-4">
                  <p className="mb-2">Strap Colour</p>
                  <Checkbox.Group
                    options={strapcolorsoptions}
                    {...register("StrapColour")}
                    className=" flex flex-col"
                    value={Filter.strapcolor}
                    onChange={handelStrapFilter}
                  ></Checkbox.Group>
                </div>
                <div className=" py-4">
                  <p className="mb-2">Dial Colour</p>
                  <Checkbox.Group
                    options={uniquedialcolor}
                    value={Filter.dialcolor}
                    {...register("DialColour")}
                    className=" flex flex-col"
                    onChange={handelDialFilter}
                  ></Checkbox.Group>
                </div>
              </form>

              <div className=" md:hidden flex absolute left-0 bottom-0 border justify-center items-center w-full">
                <div
                  onClick={() => sethides(!hide)}
                  className=" text-black border-r-2 text-center w-full flex justify-center items-center py-3"
                >
                  CANCEL
                </div>
                {/* <div className="text-red-500 w-full text-center">APPLY</div> */}
              </div>
            </div>
          </div>
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
            <div className=" flex items-center justify-between h-16 pl-0 lg:pl-6">
              <p className=" text-sm font-semibold text-gray-400">
                {" "}
                Home &gt; Analog Watch
              </p>
            </div>
            {/* <div className="p-5 border flex justify-center items-center"> */}
            <div className=" md:p-5 flex flex-wrap gap-3 items-center justify-evenly h-fit">
              {filterProducts.map((item) => (
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
