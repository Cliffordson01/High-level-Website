/* Author:............... Cliffordson Cetoute*/
/* Objective:............ Design a Website using React.js / Tailwind CSS / GSAP*/
/* Date:................ 20/01/2025*/

/* eslint-disable react/prop-types */

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative
    z-10 w-fit cursor-pointer overflow-hidden
    rounded-full bg-violet-50 px-7 py-3 
    text-black ${containerClass}`}
    >
      {leftIcon}

      <span
        className="relative incline-flex overflow-hidden 
    font-general text-xs uppercase"
      >
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
