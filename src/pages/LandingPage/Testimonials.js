import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import client from '../../assets/images/client.jpg';
import { testimonials } from '../../constants/constants';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function Testimonials() {
  var [count, setCount] = useState(0);
  const [data, setData] = useState(testimonials[count]);
  const [slide, setSlide] = useState(false);
  const next = () => {
    setCount(++count);
    getData(count);
  };
  const prev = () => {
    setCount(--count);
    getData(count);
  };
  const getData = (i) => {
    const body = document.querySelector('.testimonials');
    setData(testimonials[i]);
  };

  return (
    <div
      className="w-screen h-full flex flex-col items-center"
      data-aos="fade-up">
      <div className="flex flex-col h-4/6 w-full justify-between items-center flex-col gap-10 relative">
        <div className="header flex flex-col justify-center items-center ">
          <h1 className="text-mlg text-blue font-bold red-hat">Testimonails</h1>
          <span className="ibm text-grey">
            What clients are saying about Grow Tech
          </span>
        </div>
        <Slider>
          {testimonials.map((testimonial, index) => (
            <div
              className="testi w-5/6 flex justify-center items-center gap-20"
              key={index}>
              <div className="img-info flex flex-col items-start gap-5">
                <img
                  src={testimonial.img}
                  className="client shadow-xl "
                  alt=""
                />
                <div className="info ibm flex flex-col gap-2">
                  <h1
                    className="font-bold"
                    style={{ fontSize: '18px', color: '#192638' }}>
                    {testimonial.client.name}
                  </h1>
                  <span className="text-grey">
                    {testimonial.client.title},{' '}
                    <strong>{testimonial.client.company}</strong>
                  </span>
                </div>
              </div>

              <div className="testimonials w-3/6 text-grey relative text-justify ibm">
                <span
                  className="text-red absolute -left-10 -top-10"
                  style={{ fontSize: '72px' }}>
                  “
                </span>
                {testimonial.testimonial}
              </div>
            </div>
          ))}
        </Slider>
        {/* <div
          className="testi w-5/6 flex justify-evenly items-center my-10 "
          data-aos="fade-left">
          <div className="img-info flex flex-col items-start gap-5">
            <img src={data.img} className="client shadow-xl " alt="" />
            <div
              className="info"
              data-aos={`${slide ? 'fade-right' : 'fade-left'}`}
              data-aos-delay={300}>
              <h1 className="font-bold text-black">{data.client.name}</h1>
              <span className="text-grey">{data.client.title}</span>
            </div>
          </div>

          <div
            className="testimonials w-3/6 text-grey relative text-justify mt-10"
            data-aos="fade-up"
            data-aos-delay={300}>
            <span
              className="text-red absolute -left-10 -top-10"
              style={{ fontSize: '72px' }}>
              “
            </span>
            {data.testimonial}
            <div className="btn-container absolute -bottom-20 right-0 flex gap-5">
              <button onClick={prev} disabled={count < 1}>
                <FaAngleLeft />
              </button>
              <button
                onClick={next}
                disabled={count + 1 === testimonials.length}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
