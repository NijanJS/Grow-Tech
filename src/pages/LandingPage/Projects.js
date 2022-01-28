import React from 'react';
import { projects } from '../../constants/constants';
import Button from './../../components/Button';
import { BsArrowRight } from 'react-icons/bs';

function Projects() {
  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-start gap-5 relative z-3"
      style={{ background: '#F6F9FC' }}>
      <span className="top small-circle  absolute rounded-full top"></span>
      <span className="bottom small-circle  absolute rounded-full "></span>

      <div
        className="w-5/6 flex flex-col items-center justify-between relative"
        style={{ background: '#F6F9FC' }}>
        {projects.map((project) => (
          <div
            style={{ background: '#F6F9FC' }}
            key={project.id}
            className={`w-full flex justify-evenly py-10 px-5 bg-red-100 items-end ${
              project.id == 1 ? 'flex-row' : 'flex-row-reverse '
            } gap-10 project-container`}>
            <div className="w-3/6 flex flex-col gap-8">
              <div className="header flex flex-col gap-1">
                <span className="text-grey font-medium">Recent Projects</span>
                <h1 className="text-blue text-mlg font-bold">{project.name}</h1>
                <p
                  className="w-5/6 ibm text-grey text-justify"
                  style={{
                    lineHeight: '28px',
                  }}>
                  {project.description.first}
                  <br />
                  <br />
                  {project.description.second}
                </p>
              </div>
              <Button
                title="Read More"
                type="primary"
                styles="trans cream"
                span="text-grey"
              />
            </div>
            <div className="project-img" data-aos="fade-up">
              <img src={project.img} />
            </div>
          </div>
        ))}
        <div className="flex justify-center items-center py-10 gap-3">
          <button className="flex justify-center items-center gap-3">
            View all Projects <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
