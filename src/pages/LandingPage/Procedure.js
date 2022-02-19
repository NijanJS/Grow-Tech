import React from 'react';
import { workflow } from '../../constants/constants';
function Procedure() {
  return (
    <div className="procedure w-screen h-full py-20 flex flex-col justify-center items-center">
      <div className='flex flex-col items-center w-5/6'>
      <div className="header text-center">
        <span className="text-grey font-medium text-head">
          Our working process
        </span>
        <h1 className="font-bold6 text-blue text-mlg">How we work</h1>
      </div>
      <div className="how-we-work flex justify-evenly w-full py-20 relative page">
        {workflow.map((work, id) => (
          <div
            key={work.id}
            className="flex flex-col items-center "
            data-aos="fade-left"
            data-aos-delay={work.delay}>
            <img src={work.img}/>
            <div className="font-medium name">
              <span className="text-grey ">Step {work.id}: </span>
              <span className='work-text'>{work.text}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Procedure;
