import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { services } from '../../constants/constants';
import { BsArrowRight } from 'react-icons/bs';

function Services() {
  const [data, setData] = useState({
    header: services[0].content.header,
    body: services[0].content.body,
    img: services[0].content.img,
    color: services[0].bg,
    nextColor: services[1].bg,
    active: false,
  });
  useEffect(() => {
    handleActive(0);
  }, []);
  const handleActive = (k) => {
    const list = document.querySelectorAll('.list');
    const activeList = document.querySelectorAll('.active');
    list[k].classList.add('active');
    setData({
      header: services[k].content.header,
      body: services[k].content.body,
      img: services[k].content.img,
      nextColor: services[k == 3 ? 0 : k + 1].bg,
      color: services[k].bg,
    });
    if (activeList.length > 0) {
      activeList[0].classList.remove('active');
    } else if (activeList.length == 1) {
      setData({ active: true });
    }
  };

  return (
    <div
      className="services w-full h-full flex items-start overflow-x-hidden py-20 relative overflow-hidden "
      style={{ background: data.color }}>
      <span
        className="circle absolute"
        style={{ background: data.nextColor }}></span>
      <div className="my-5 page min-w-full w-screen h-full flex justify-around items-center service-item">
        <div
          className="w-2/5 h-2/6 text-section flex flex-col justify-around items-start gap-10"
          data-aos="fade-up">
          <div className="header flex flex-col gap-3 item-end h-2/6 mt-5">
            <span className="text-grey">Area of focus</span>
            <h2 className="sub-header" style={{ color: '#165EAD' }}>
              Our service
            </h2>
          </div>

          <ul className="service-list flex flex-col w-3/5 items-start gap-5">
            {services.map((service, key) => {
              return (
                <li
                  key={key}
                  value={key}
                  onClick={(e) => handleActive(e.target.value)}
                  className="list cursor-pointer flex items-center gap-2 text-grey">
                  {service.title} <BsArrowRight className="arrow " />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-between w-2/5 service-body gap-2 text-grey">
          <div className="service-img" data-aos="fade-up">
            <img className="service-img" src={data.img} />
          </div>
          <h2
            className="font-bold w-4/5 text-grey"
            data-aos="fade-up"
            data-aos-delay={300}>
            {data.header}
          </h2>
          <p className="w-full" data-aos="fade-up" data-aos-delay={500}>
            {data.body}
          </p>
          <Button
            title="Read More"
            type="primary"
            style={{
              background: data.color,
              color: 'black',
              padding: '10px',
            }}
            styles="trans w-fit mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
