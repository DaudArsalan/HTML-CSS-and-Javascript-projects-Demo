import React from "react";

export default function CardItems(props) {
  const { link, image, name } = props;

  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="" src={image} alt="Project Preview" />

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
