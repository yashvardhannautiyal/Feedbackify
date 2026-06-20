import React, { useState } from "react";
import { LuMessageSquarePlus } from "react-icons/lu";
import { addFeedback } from "../services/feedbackServices";

function FeedbackForm({fetchFeedbacks}) {
  //set form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //handle the change for the particular input given(name, email, message)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit function for the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addFeedback(formData);
      fetchFeedbacks();
      
      alert("Feedback submitted successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

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

          <form className="py-3 flex-col" onSubmit={handleSubmit}>
            {/*   name input */}
            <div className="pt-2">
              <p className="pb-1">Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="rounded-lg w-full py-1 px-2 bg-orange-50 border border-yellow-700 outline-yellow-900 resize-none"
                placeholder="Tell us what you think..."
              ></textarea>
            </div>

            <button className="py-2 w-full border bg-yellow-800 hover:bg-yellow-700 text-white rounded-xl hover:cursor-pointer">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
