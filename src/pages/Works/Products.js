import React from "react";
import {Link, Navigate, Outlet, useNavigate} from "react-router-dom";
import { SubHeader } from "../../components/contentbox";
import { products } from "../../constants/constants";
import Contact from "../LandingPage/Contact";
import { BsArrowRight } from "react-icons/bs";
function Products() {
  let navigate = useNavigate();
  const navigateProduct = (product)=>{
  navigate(product.path,{state:product}); 
  }
  return (
    <>
    <div className="w-screen h-full min-h-screen flex flex-col justify-start items-start">
      <div
        className="w-full bg-blue flex justify-evenly pt-10 items-center"
        style={{ minHeight: "30vh", height: "auto", padding: "10px 0" }}
      >
        <div className="page w-3/5 h-full flex flex-row items-center justify-center ">
          <div className="page flex flex-col w-4/5 full-width works-header">
            <span className="text-white">Our products</span>
            <h1 className="text-white w-4/5 text-mlg font-medium red-hat">
              Just a taste of who we’ve helped
            </h1>
          </div>
          <div className="w-full flex flex-col items-center full-width">
            <SubHeader
              styles="text-white w-full text-md"
              title="We hate to brag, so we let our work do the talking. Take a deep dive
              through our product and explore client and their product in our gallery."
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-full flex flex-col items-center justify-start gap-5 block-container bg-white">
        <div className="w-5/6 flex flex-col items-center justify-between main-container">
          <div className="w-full flex flex-col items-center justify-between projects">
            {products.map((product) => (
              <div
                key={product.id}
                className={`container-insider w-full flex justify-between py-10 px-5 bg-white items-start ${
                  product.id%2 ? "flex-row-reverse" : "flex-row "
                } gap-10 project-container`}
              >
                <div className="w-3/6 flex flex-col gap-8">
                  <div className="header flex flex-col gap-1">
                    <h1 className="text-blue text-lg font-bold6">
                      {product.name}
                    </h1>
                    <div className="flex gap-1 items-start flex-wrap">
                      {product.keywords.map((keyword, key) => (
                        <span
                          className="keyword bg-keyblue p-2 text-greydef"
                          key={`${keyword}-${key}`}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <p
                      className="w-5/6 ibm text-grey text-justify"
                      style={{
                        lineHeight: "28px",
                      }}
                    >
                      {product.description.first}
                    </p>
                  </div>
                  <button onClick={()=>navigateProduct(product)} className="flex items-center gap-1 text-boldred font-bold cursor-pointer">
                    Read more
                    <BsArrowRight />
                  </button>
                </div>
                <div
                  className="bg-cream flex justify-center items-center img-bg"
                  data-aos="fade-up"
                >
                  <img className="project-img full-width" src={product.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact text="Want to be in our Gallery?" />
    </div>
    <Outlet/>
    </>
  );
}

export default Products;
