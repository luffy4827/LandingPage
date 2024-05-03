import React from "react";
import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";

const Downloads = () => {
  return (
    <section className="py-20 mt-20">

      {/* heading  */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">
          Download the extension
        </h1>
        <p className="text-center text-bookmark-grey mt-4">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favorite you’d like us to prioritize.
        </p>
      </div>

      {/* cards */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">

        {/* card1 */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <img src={chrome} alt="" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* card2 */}
        <div className="flex flex-col rounded-md shadow-md lg:my-8">
          <div className="p-6 flex flex-col items-center">
            <img src={firefox} alt="" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* card3 */}
        <div className="flex flex-col rounded-md shadow-md lg:mt-16">
          <div className="p-6 flex flex-col items-center">
            <img src={opera} alt="" />
            <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
          </div>
          <hr className="border-b border-bookmark-white" />
          <div className="flex p-6">
            <button
              type="button"
              className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
