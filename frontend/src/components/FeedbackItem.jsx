import React from "react";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteFeedbacks } from "../services/feedbackServices";

function FeedbackItem({ feedback, fetchFeedbacks }) {
  
  //function for handle when item is deleted
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?",
    );

    if (!confirmDelete) return;

    try {
      await deleteFeedbacks(feedback._id);

      fetchFeedbacks();
    } catch (error) {
      console.log(error);

      alert("Delete failed");
    }
  };

  return (
    <div className="px-30 pb-5">
      <div className="bg-white border-yellow-800 shadow-lg rounded-xl p-8 mt-2 px-10">
        {/* user details  */}
        <div className="flex justify-between items-center">
          {/* name + email  */}
          <div>
            <p className="flex gap-1 items-center font-bold text-lg">
              <CiUser />
              {feedback.name}
            </p>
            <p className="flex gap-1 items-center text-sm text-gray-600">
              <CiMail /> {feedback.email}
            </p>
          </div>

          {/* date + delete button  */}
          <div className="flex gap-4 items-center">
            <div className="bg-orange-50 rounded-xl px-2">
              <p>{new Date(feedback.createdAt).toLocaleDateString()}</p>
            </div>
            <button
              className="text-red-700 hover:bg-red-100 hover:cursor-pointer p-1 rounded-sm"
              onClick={handleDelete}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        </div>

        {/* feedback  */}
        <div className="pt-7">
          <p>{feedback.message}</p>
          <p className="pt-4 text-gray-600 text-sm">
            Submitted on {" "} {new Date(feedback.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
