import React from 'react';
import bg from '../../assets/images/bg.png';
import client from '../../assets/images/police.png';
import Button from '../../components/Button';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="relative max-w-full homepage flex justify-center">
        <img src={bg} className="absolute max-w-screen -z-10 home-bg" />
        <div className="page w-5/6 h-full flex justify-evenly items-center">
          <div className="w-3/5 h-2/6 text-section flex flex-col justify-center items-start gap-2">
            <h2 className="head">Think. Build. Grow.</h2>
            <p className="body w-3/5">
              Grow your business digitally with us. We are inovative, friendly
              and well motivated to grow your business.
            </p>
            <div className="container flex min-w-full justify-start mt-3">
              <Link to="works">
                <Button title="See Our Works" type="primary" />
              </Link>{' '}
            </div>
          </div>
          <div className="main-prj-blur flex flex-col items-center justify-evenly shadow-lg">
            <span className="text-white text-2xl font-medium">
              Our Valuable Clients
            </span>
            <img src={client} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
