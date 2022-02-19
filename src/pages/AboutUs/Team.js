import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaTeamspeak } from 'react-icons/fa';
import { Header, SubHeader } from '../../components/contentbox';
import { Teams } from '../../constants/constants';
function Team() {
  const [data, setData] = useState(Teams[0].members);
  useEffect(() => {
    handleSelect(0);
  }, []);
  const handleSelect = (value) => {
    const selectors = document.querySelectorAll('.team-selector li');
    const selected = document.querySelectorAll('.selected');
    const members = document.querySelector('.members');

    selectors[value].classList.add('selected');

    if (selected.length > 0) {
      selected[0].classList.remove('selected');
    }
    setData(Teams[value].members);
  };
  return (
    <div className="w-screen h-full flex justify-center items-center pb-20">
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
                className="w-fit cursor-pointer rounded-full bg-light text-grey px-5 py-3">
                {team.title}
              </li>
            );
          })}
        </div>
        <div
          className="members flex justify-center items-center gap-20 page"
          data-aos="fade-up">
          {data.map((dat, id) => {
            return (
              <div className="flex flex-col items-start" key={id}>
                <div
                  className="user-img overflow-hidden "
                  style={{ width: '280px', height: '360px' }}>
                  <img src={dat.img} className="object-cover h-full w-full" />
                </div>
                <div className="user-info">
                  <span className="font-medium text-dark text-lg">
                    {dat.name}
                  </span>
                  <br />
                  <span className="text-grey">{dat.position}</span>
                </div>
                <div className="social flex gap-1 ">
                  <a target="_blank" href={dat.fb}>
                    <FaFacebook />
                  </a>
                  <a target="_blank" href={dat.ln}>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
