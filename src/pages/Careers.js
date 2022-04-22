import React from 'react';
import { BG, Header, Paragraph, SubHeader } from '../components/contentbox';
import '../assets/styles/about.css';
import { Vacancies } from './../constants/constants';
import Button from '../components/Button';

function Careers() {
  const src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`;

  return (
    <div className="flex w-screen flex-col justify-center items-center">
      <div className="w-screen h-screen flex justify-center items-center">
        <BG styles="opacity-30 left-0 homepage" />
        <div className="page w-5/6 h-full flex justify-evenly items-center">
          <div className="page w-3/5 h-2/6 ml-10 text-section flex flex-col justify-center items-start gap-3 full-width">
            <div className="header page">
              <Paragraph body="Career" styles="font-medium"/>
              <Header
                title="Join the ever Expanding Crew"
                styles="text-dark w-5/6"
              />
            </div>
            <Paragraph
              styles="w-2/5"
              body={`Want to come exploring with us? Here’s a look into a future at 
Grow Tech.`}
            />
          </div>
          <div className="main-img flex flex-col bg-drop items-center justify-evenly shadow-lg overflow-hidden">
            <img src={src} className="w-full h-full " />
          </div>
        </div>
      </div>
      <div className="w-4/5 flex flex-col items-center justify-center gap-10 pb-10">
        <div className="flex flex-col items-center gap-2 career-title">
          <Paragraph body={`Lets join us`} />
          <Header title={`Our job vacancy`} />
        </div>
        {Vacancies.length > 0 ? (
          <div className="flex w-full justify-around items-center flex-wrap wrap gap-10">
            {Vacancies.map((vacancy, id) => (
              <div
                data-aos="fade-left"
                data-aos-delay={id * 100}
                key={id}
                className="job-box flex flex-col items-start justify-evenly px-3">
                <span
                  className="text-blue font-bold"
                  style={{ fontSize: '18px' }}>
                  {vacancy.title}{' '}
                </span>
                {vacancy.requirements.map((list, id) => (
                  <li key={id} style={{ listStyle: 'disc' }}>
                    {list}
                  </li>
                ))}
                <div className="w-full flex justify-end">
                  <Button
                    title={`View Details`}
                    styles={'primary trans'}
                    span={`text-grey`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="font-bold text-lg text-grey">No Job Opening</span>
            <Paragraph
              body={`We're not looking for any new hands on deck at the moment. Check back in later and stay curious out there.`}
              styles={`w-3/5 text-center`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Careers;
