import React from 'react';
import { projects } from '../../constants/constants';
import Button from './../../components/Button';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-start gap-5 block-container"
      style={{ background: '#F6F9FC' }}>
<div className="vertical-text  ">
  <div className="vertical-lines"></div>
  <span className='vertical'>Our Work</span>
  <div className="vertical-lines"></div>

</div>

      <div
        className="w-5/6 flex flex-col items-center justify-between main-container "
        style={{ background: '#F6F9FC' }}>
        <span className="small-circle top"></span>
        <span className="small-circle btm"></span>
          <div className="w-full flex flex-col items-center justify-between">
        {projects.map((project) => (
          <div
            style={{ background: '#F6F9FC' }}
            key={project.id}
            className={`container-insider w-full flex justify-between py-10 px-5 bg-red-100 items-end ${
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
                title="Visit Site"
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
         <div className="btm-overlay w-full bg-cream flex justify-center items-center py-10 gap-3 z-3">
          <Link to="/works/projects">
          <button className="flex justify-center items-center gap-3">
            View all Projects <BsArrowRight />
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
