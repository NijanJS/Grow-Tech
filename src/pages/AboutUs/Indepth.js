import React from 'react';
import { Header, Paragraph, SubHeader } from '../../components/contentbox';
import { WeAre } from './../../constants/constants';
function Indepth() {
  return (
    <div className="w-screen h-full flex justify-center items-center bg-blue py-20">
      <div className="page w-4/5 h-full flex flex-col justify-around gap-20">
        <div className="w-full flex">
          <span className=" text-white text-mlg font-bold">
          We Are
          </span>
        </div>
        <div className="w-4/5 flex flex-col justify-start items-start gap-10 full-width">
          {WeAre.map((body, key) => (
            <div className="page flex  items-center w-full " key={key}>
              <div className="header relative w-full flex justify-between ">
                {body.id ? (
                  <span className="absolute -left-5 text-grey">0{body.id}</span>
                ) : (
                  <div className=" page flex justify-start items-center gap-5">
                    <span className="flex justify-end items-center h-20 w-20 rounded-full bg-ellipse" > 
                      <img src={body.icon} className="px-1"/>
                    </span>
                    <SubHeader
                      title={body.title}
                      styles="text-dark text-lg font-semibold"
                    />
                  </div>
                )}
              </div>
              <p className='text-white w-full full-width text-justify'>
              {body.body}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Indepth;
