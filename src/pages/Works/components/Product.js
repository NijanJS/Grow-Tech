import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ImCross as Cross } from "react-icons/im";
import Contact from "../../LandingPage/Contact";
function Product() {
  let history = useLocation();
  let navigate = useNavigate();
  const [product] = useState(history.state);
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="navigate-btn right-0 top-0 float-right flex justify-center items-center"
      >
        <Cross />
      </button>

      <div
        style={{ background: "#FFF" }}
        key={product.id}
        className={`w-full flex flex-col justify-center items-center py-10 px-5 gap-10 my-40`}
      >
        <div className="w-auto  flex flex-col gap-8 items-end justify-center product-container">
          <div
            className="img-bg bg-cream flex flex-col items-center justify-center product-img"
            data-aos="fade-up"
          >
            <img src={product.img} className="project-img" />
          </div>
          <div className="header product-header flex flex-col gap-4 items-center justify-center">
            <h1 className="text-blue text-lg font-bold6">{product.name}</h1>
            <div className="flex gap-1 items-start ">
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
              className="w-3/6 ibm text-grey text-justify flex flex-col gap-4"
              style={{
                lineHeight: "28px",
              }}
            >
              <p>{product.description.first}</p>
              <p>{product.description.second}</p>
            </p>
            <div className="flex w-full justify-between">
              <div className="grid grid-cols-1">
                <span>Technology we use:</span>
                {product.techStack?.map((tech, id) => (
                  <li className="text-grey" key={`${tech}-${id}`}>
                    — {tech}
                  </li>
                ))}
              </div>
              {/* {product?.client && ( */}
                <div className="clients">
                  <span>Our Client</span>
                  <img src={product?.client} className="client-img" />
                </div>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
      <Contact text={`Want to use our product?`} custom />
    </>
  );
}

export default Product;
