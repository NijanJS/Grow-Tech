import React from 'react';
import Button from '../components/Button';
import { Header, Paragraph, SubHeader } from '../components/contentbox';
import { services } from '../constants/constants';
import Techstack from './AboutUs/Techstack';
import Contact from './LandingPage/Contact';
import '../assets/styles/services.css';
import '../assets/styles/homepage.css';
function Services() {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center ">
      <div
        className="w-full py-40 bg-blue flex justify-evenly "
        style={{ height: '20vh' }}>
        <div className="page w-4/5 h-full flex justify-evenly service-header">
          <h1
            className="text-white text-mlg font-medium red-hat"
            styles={`text-white`}>
            Our Services
          </h1>
          <SubHeader
            styles="text-white w-2/5 text-md"
            title="Defining categories + helping ambitious organizations and businesses move at the speed of culture"
          />
        </div>
      </div>
      <div className="page w-full h-full flex items-center justify-center">
        <div className="w-4/5 flex flex-col justify-center items-center gap-10">
          {services.map((service, id) => {
            return (
              <>
                <div
                  data-aos="fade-up"
                  data-aos-delay={id * 100}
                  key={id}
                  className={`project-container flex ${
                    service.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row'
                  } justify-around py-10`}>
                  <div className="flex flex-col w-fit w-2/4 gap-1">
                    <span className="text-grey">0{service.id}</span>
                    <SubHeader
                      title={service.title}
                      styles="text-lg font-bold6 text-grey7"
                    />
                    <SubHeader
                      title={service.content.header}
                      styles="font-bold text-grey7"
                    />
                    <Paragraph
                      body={service.content.body}
                      styles="w-3/5 text-justify"
                    />
                    <br />
                    <span>Technology we use:</span>
                    <div className="grid grid-cols-1">
                      {service.content?.techstack?.map((tech, id) => (
                        <li className="text-grey" key={id}>
                          — {tech}
                        </li>
                      ))}
                    </div>
                    <Button
                      title="See Our Works"
                      styles="primary trans"
                      span="text-grey font-medium"
                    />
                  </div>
                  <div
                    data-aos="fade-up"
                    className={`data-img flex items-center ${
                      service.id % 2 == 0 ? 'justify-start' : 'justify-end'
                    } w-2/4`}>
                    <img src={service.content.img} />
                  </div>
                </div>
                <span
                  className="w-full line"></span>
              </>
            );
          })}

          <Contact text="Ready to get real result?" />
        </div>
      </div>
    </div>
  );
}

export default Services;
