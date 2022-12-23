import React from "react";

export default function CardItems(props) {
  const { link, image, name } = props;

  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-500 shadow-lg">
          <img className="scale-100" src={image} alt="Project Preview" />

          <div className="py-3 px-5 bg-[#f8e881]">
            <h5 className="text-2xl text-[#6B5D00] text-center font-semibold tracking-widest dark:text-white">
              {name}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
}
