import React, { useState } from "react";
const Accordion = ({ accordionheading, bodyText }) => {
  const [openStates, setOpenStates] = useState(new Array(bodyText.length).fill(false));

  const toggleAccordion = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div className="rounded  my-2 px-10 md:px-24 mb-10">
      {accordionheading &&
        accordionheading.map((headingtext) => (
          <div
            className="grid md:grid-cols-2 gap-1 grid-flow-row md:auto-rows-max pb-4 pt-14"
            key={"1a"}
          >
            <p className="text-6xl text-purple-700">{headingtext.title} </p>
          </div>
        ))}
      {bodyText &&
        bodyText.map((bodyTexts, index) => (
          <div key={bodyTexts.key}>
            <div
              className="p-4 cursor-pointer border-b-2 transition-all ease-in border-purple-500 flex items-center justify-between heading_accordion"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl md:text-4xl font-semibold text-gray-700 accordion-title">
                {bodyTexts.heading}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8 accordion-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {openStates[index] && (
              <div className={`text-base pb-3  font-text ${
                    openStates[index]
                  ? "accordion-body "
                  : ""
              }`}    >
                <div className='grid md:grid-cols-2 gap-1 grid-flow-row md:auto-rows-max ' 
                >
                  <p className="text-lg mt-1">
                    {bodyTexts.bodyData}
                  </p>
                  <img
                    src={bodyTexts.image}
                    alt="icon"
                    className="w-full mt-3"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
