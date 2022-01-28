import React from 'react';
import { clients } from '../../constants/constants';

function Clients() {
  return (
    <div className="w-screen h-full py-20 flex items-center justify-evenly">
      <div className="page w-5/6 h-full  flex flex-row justify-evenly">
        <div className="projects-no w-2/5 flex flex-col justify-center items-start">
          <span
            className="red-hat text-blue font-bold "
            style={{ fontSize: '48px' }}>
            10+
          </span>
          <span>Clients we have helped to grow through digital products</span>
        </div>
        <div
          className="w-4/5 grid grid-cols-5 bg-cream p-10 clients"
          style={{ minHeight: '324px' }}>
          {clients.map((client, id) => (
            <div className="justify-center items-center flex" key={id}>
              <img src={client} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
