import React from "react";
import { LuMessageSquarePlus } from "react-icons/lu";

function FeedbackForm() {
  return (
    <div className="px-30">
      {/* text  */}
      <div className="py-10">
        <h2 className="text-4xl roman-font">Feedback</h2>
        <p className="pt-2 text-gray-700">
          Share your thoughts, suggestions, or concerns with us.
        </p>
      </div>
      <hr className="text-gray-300 " />

      {/* form  */}
      <div className="pt-10">
        <div className="bg-white w-2xl p-4 rounded-xl border-yellow-800 shadow-lg">
          <h1 className="text-md font-semibold flex gap-1 items-center">
            <LuMessageSquarePlus /> Submit Feedback
          </h1>

          <form className="py-3 flex-col">
            {/*   name input */}
            <div className="pt-2">
              <p className="pb-1">Name</p>
              <input
                type="text"
                required
                className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900"
                placeholder="Enter your name"
              />
            </div>

            {/*   email input */}
            <div className="pt-2">
              <p className="pb-1">Email</p>
              <input
                type="email"
                required
                className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900"
                placeholder="your.email@gmail.com"
              />
            </div>

            {/*   message input */}
            <div className="pt-2 pb-3">
              <p className="pb-1">Message</p>
              <textarea
                rows={4}
                className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900 resize-none"
                placeholder="Tell us what you think..."
              ></textarea>
            </div>
            
            <button className="py-2 w-full border bg-yellow-800 hover:bg-yellow-700 text-white rounded-xl hover:cursor-pointer">Submit Feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
