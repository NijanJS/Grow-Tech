import React from 'react';
import '../assets/styles/components.css';
function Button({ title, type, icon, styles, span, style }) {
  return (
    <button
      className={`${type ? 'primary' : 'secondary'} 
        ${styles} text-center flex justify-center items-center btn
      `}>
      <span
        style={style}
        className={`flex items-center justify-center gap-2 mx-auto ${span}`}>
        {title}
        {icon}
      </span>
    </button>
  );
}

export default Button;
