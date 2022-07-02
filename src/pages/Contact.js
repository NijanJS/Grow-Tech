import React from 'react';
import { contactDetails } from '../constants/constants';
import { Header, BG, SubHeader, Paragraph } from './../components/contentbox';
import ContactForm from './Contact/ContactForm';
import Map from './Contact/Map';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Pattern from '../assets/images/Pattern.png';
function ContactUs() {
  const src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`;
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        {/* <div className='absolute left-0 homepage bg-red w-full h-full' ></div> */}
        <BG styles="opacity-50 left-0 homepage" />
        <div className="page w-5/6 h-full flex justify-evenly items-center">
          <div className="page w-3/5 h-2/6 ml-10 text-section flex flex-col justify-center items-start gap-3 full-width">
            <div className="header page flex flex-col gap-3">
              <span
                className="text-grey font-medium"
                style={{ fontSize: '18px' }}>
                Contact us
              </span>
              <Header
                title="We would love to hear from you"
                styles={`w-3/5 text-dark`}
              />
            </div>
            <p className="w-3/6 text-grey " style={{ fontWeight: '400' }}>
              Do you have anything in your mind to tell us? Please don't
              hesitate to get in touch with us.
            </p>
          </div>
          <div className="page flex flex-wrap justify-evenly gap-y-8 gap-x-1 contact-info">
            {contactDetails.map((info, id) => (
              <div
                key={id}
                className="bg-white shadow-lg rounded-lg ibm flex items-start gap-5 p-5 div-info">
                <span
                  className="text-blue items-center "
                  style={{ fontSize: '30px' }}>
                  {info.icon}{' '}
                </span>
                <span className="text-grey flex flex-col gap-3 flex-wrap">
                  <strong
                    className="text-grey7 w-full"
                    style={{ fontSize: '18px', fontWeight: '500' }}>
                    {info.title}
                  </strong>
                  {info.data.map((detail, id) => (
                    <span key={`${detail}-${id}`} className="flex flex-col gap-0">
                      {detail}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full page flex items-center justify-evenly form-components">
        <Map />
        <ContactForm />
      </div>
      <div className="w-screen h-full flex justify-center items-center my-10">
        <div className="w-5/6 bg-blue py-20 rounded-2xl relative">
          <img className="pattern absolute top-0" src={Pattern} />
          <img
            className="pattern absolute bottom-0 right-0 rotate-180"
            src={Pattern}
          />
          <div className="box flex flex-col text-center justify-center items-center gap-5">
            <span className="font-medium text-mlg text-white">
              {`Are you looking to join our team?`}
            </span>
            <Link to="/careers"
              // onClick={() => (window.location.pathname = '/careers')}
              className="btn flex justify-center items-center gap-2">
              Let's Talk <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
