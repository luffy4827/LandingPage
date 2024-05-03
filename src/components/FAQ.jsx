import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const FAQ = () => {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        {/* heading  */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        {/* faq  */}
        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a Bookmark?</span>
            <RiArrowDropDownLine className="text-bookmark-purple fas fa-chevron-down  w-11 h-11" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">How can I request a new browser?</span>
            <RiArrowDropDownLine className="text-bookmark-purple fas fa-chevron-down  w-11 h-11" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <RiArrowDropDownLine className="text-bookmark-purple fas fa-chevron-down  w-11 h-11" />
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other Chromium browsers?</span>
            <RiArrowDropDownLine className="text-bookmark-purple fas fa-chevron-down  w-11 h-11" />
          </div>
          <button
            type="button"
            className="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
