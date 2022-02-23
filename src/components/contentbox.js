import React from 'react';
import bg from '../assets/images/bg.png';
export const Header = ({ title, styles,style }) => {
  return (
    <h1 className={`${styles} text-blue text-mlg font-bold red-hat `} style={style}>
      {title}
    </h1>
  );
};

export const SubHeader = ({ title, styles, style }) => {
  return (
    <span style={style} className={`text-white font-medium ibm ${styles}`}>
      {title}
    </span>
  );
};

export const Paragraph = ({ body, styles,style }) => {
  return <p className={`text-grey ${styles}`} style={style}>{body}</p>;
};

export const BG = ({ img, styles }) => {
  return (
    <img
      src={img ? img : bg}
      className={`${styles} absolute -z-10 w-screen h-screen top-0 bg`}
    />
  );
};
