import React from 'react';
import element from '../../assets/images/element-about.png';
import bg2 from '../../assets/images/bg2.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <div className="relative max-w-full flex justify-center">
      {/* <img
        src={bg2}
        className="absolute mb-5 -bottom-80 left-40 scale-125 -z-9"
      /> */}
      <div className="mt-8 pb-10 page w-5/6 h-full flex justify-evenly items-center ">
        <div
          className="w-3/5 h-2/6 text-section flex flex-col justify-evenly items-start gap-5 about"
          data-aos="fade-right">
          <div className="header flex flex-col gap-3 items-start h-2/6 mt-5">
            <span>About Us</span>
            <h2 className="sub-header" style={{ color: '#165EAD' }}>
              We Are Grow Tech
            </h2>
          </div>
          <div
            className="body w-3/5 leading-loose flex flex-col gap-2"
            style={{ color: '#596579', fontSize: '16px' }}>
            <p>
              We are a Nepal based <strong>IT solution agency,</strong> focused on
              creating creative & interactive web experiences for aspiring &
              established businesses and enterprises.
            </p>
            <p>
              Our collaborative, phased approach considers all aspects of web,
              app design & branding, SEO optimization, interactivity, and UI/UX
              to deliver industry leading solutions.
            </p>
            <p>
              We specialise on high performance immersive digital experiences
              aimed at delivering our clients a competitive advantage and
              effective ROI on their investment.
            </p>
          </div>
          <div className="projects-info flex w-2/5 items-center">
            <div className="flex w-full justify-around items-start">
              <span>
                <strong>20+</strong> <br /> Developers & <br />
                Designers
              </span>
              <span>
                <strong>10+</strong> <br /> Projects <br />
              </span>
            </div>
          </div>
          <div className="container flex min-w-full mt-3">
            <Link to="about">
              <Button
                title="Meet The Team"
                type="primary"
                styles="trans w-1/5"
                span="text-grey"
              />
            </Link>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-evenly img-size"
          data-aos="fade-left"
          data-aos-delay={500}>
          <img
            src={element}
            className="-z-1"
            style={{ transform: 'scale(1.1)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
