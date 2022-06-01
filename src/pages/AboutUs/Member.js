import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Member({ data, id, tag }) {
  return (
    <>
      <div className="flex flex-col items-start gap-3 member" key={`${data}-${id}`}>
        <div
          className="user-img overflow-hidden "
          style={{ width: "200px", height: "280px" }}
        >
          <img src={data.img} className="object-cover h-full w-full team-img" />
        </div>
        <div className="user-info">
          <span className="font-medium text-dark text-lg">{data.name}</span>
          <br />
          <span className="text-grey"><strong>{data.position}</strong></span>
        </div>
        <div className="social flex gap-1 ">
          <a target="_blank" href={data.fb}>
            <FaFacebookF />
          </a>
          <a target="_blank" href={data.ln}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
}

export default Member;
