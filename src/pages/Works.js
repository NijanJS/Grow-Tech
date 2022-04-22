import React, { useState, useEffect } from 'react';
import { Header, SubHeader, Paragraph } from './../components/contentbox';
import { ProjectsLabel, allProjects } from './../constants/constants';
import '../assets/styles/about.css';
import '../assets/styles/homepage.css';
import Contact from './LandingPage/Contact';
function Works() {
  const [projects, setProjects] = useState(allProjects);
  useEffect(() => {
    handleLabel(0);
  }, []);
  const handleLabel = (data) => {
    const selectors = document.querySelectorAll('.team-selector li');
    const selected = document.querySelectorAll('.selected');

    selectors[data].classList.add('selected');

    if (selected.length > 0) {
      selected[0].classList.remove('selected');
    }
    let prj = [];
    allProjects.map((project) => {
      if (ProjectsLabel[data] == project.lable) {
        prj.push(project);
      }
    });
    if (prj.length > 0) {
      setProjects(prj);
    } else {
      setProjects(allProjects);
    }
  };
  return (
    <div className="w-screen h-full min-h-screen flex flex-col justify-start items-start">
      <div
        className="w-full bg-blue flex justify-evenly pt-10"
        style={{ height: '30vh' }}>
        <div className="page w-3/5 h-full flex flex-row items-center justify-center">
          <div className="page flex flex-col w-4/5 full-width">
            <span className="text-white">Our projects</span>
            <h1 className="text-white w-4/5 text-mlg font-medium red-hat">
              Just a taste of who we’ve helped
            </h1>
            <Header title="" styles="" />
          </div>
          <div className="w-full flex flex-col items-center full-width">
            <SubHeader
              styles="text-white w-full text-md"
              title="We hate to brag, so we let our work do the talking. Take a deep dive
                through our project and explore client and their project in our gallery."
            />
          </div>
        </div>
      </div>
      <div className="team-selector flex w-full justify-center items-center gap-5 page py-5">
        {ProjectsLabel.map((label, id) => {
          return (
            <li
              key={id}
              value={id}
              onClick={(e) => handleLabel(e.target.value)}
              className="w-fit cursor-pointer rounded-full bg-light text-grey px-5 py-3">
              {label}
            </li>
          );
        })}
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="w-4/5 projects flex flex-wrap justify-around items-center gap-10"
          data-aos={`fade-up`}>
          {projects.map((project, id) => (
            <div className="flex flex-col items-start full-width" key={id}>
              <div className="bg-cream flex justify-center items-center img-bg">
                <img src={project.img} className="project-img full-width" />
              </div>
              <span className="text-lg text-blue font-medium">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Contact text="Want to be in our Gallery?" />
    </div>
  );
}

export default Works;
