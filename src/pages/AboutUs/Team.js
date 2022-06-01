import React, { useState, useEffect } from "react";
import { Header } from "../../components/contentbox";
import { Teams } from "../../constants/constants";
import Member from "./Member";
function Team() {
  const [data, setData] = useState(Teams[0].members);
  const [select, setSelect] = useState("flex");
  useEffect(() => {
    handleSelect(0);
  }, []);
  const handleSelect = (value) => {
    const selectors = document.querySelectorAll(".team-selector li");
    const selected = document.querySelectorAll(".selected");
    selectors[value].classList.add("selected");
    if (selected.length > 0) {
      selected[0].classList.remove("selected");
    }
    setData(Teams[value].members);
    setSelect(value===0?"flex":"grid");

  };
  return (
    <div className="w-screen h-full flex justify-center items-center pb-20" data-aos="fade-up">
      <div className="page w-4/5 h-full flex flex-col justify-around gap-10">
        <div className="header flex w-full justify-center">
          <Header title="Meet The Team" />
        </div>
        <div className="team-selector flex w-full justify-center items-center gap-5 page ">
          {Teams.map((team, id) => {
            return (
              <li
                key={id}
                value={id}
                onClick={(e) => handleSelect(e.target.value)}
                className="w-fit cursor-pointer rounded-full bg-light text-grey px-5 py-3"
              >
                {team.title}
              </li>
            );
          })}
        </div>
        <div
          className={`members flex justify-center items-center gap-20 page flex-wrap ${select}`}
        >
          {data.map((members, id) => (
              <Member data={members} id={id} tag={members?.tag}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
