import React from 'react';
import Button from './../components/Button';

function ContentBox({
  header,
  body,
  content_title,
  content_img,
  actions,
  color,
}) {
  return (
    <div className="page min-w-full w-screen h-full flex justify-evenly items-center ">
      <div className="container w-2/5 h-2/6 text-section flex flex-col justify-center items-start gap-5">
        <h2 className={`head text-white font-extrabold text-${color}`}>
          {header}
        </h2>
        <p className="body w-2/5 ml-3">{body}</p>
        <div className="container  flex min-w-full justify-start gap-4">
          {actions}
        </div>
      </div>
      <div className="main-projects flex flex-col items-center justify-evenly shadow-lg">
        <span className="text-white text-2xl font-medium">{content_title}</span>
        <img src={content_img} />
      </div>
    </div>
  );
}

export default ContentBox;
