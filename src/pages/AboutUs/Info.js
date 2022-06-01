import React from 'react';
import { Header, Paragraph, SubHeader } from '../../components/contentbox';
function Info({ data, header,dataname }) {
  return (
    <div className={`w-screen h-full flex justify-center items-center ${dataname}`}>
      <div className="page text-container w-4/5 h-full flex flex-col justify-evenly gap-20">
        <div className="flex w-full">
          <Header title={header}/>
        </div>
        <div className="w-full flex flex justify-between page gap-20">
          {data.map((body, key) => (
            <div className="flex flex-col flex-1 w-full" key={key}>
              <div className="header relative w-4/5 flex flex-col gap-5">
                {body.id ? (
                  <span className="absolute -left-5 text-grey">0{body.id}</span>
                ) : (
                  <span className="w-20 h-20 rounded-full bg-ellipse flex justify-center items-center">
                    <img src={body.icon} />
                  </span>
                )}{' '}
                <span
                  className="text-grey text-lg w-full font-semibold">
                    {body.title}
                    </span>
                <Paragraph body={body.body} styles="text-justify" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
