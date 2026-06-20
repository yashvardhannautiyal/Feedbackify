import React, { useEffect, useState } from "react";
import DashboardNav from "../../components/DashboardNav";
import FeedbackForm from "../../components/FeedbackForm";
import FooterComp from "../../components/FooterComp";
import SearchBar from "../../components/SearchBar";
import FeedbackItem from "../../components/FeedbackItem";
import { getFeedbacks } from "../../services/feedbackServices";

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  //function to fetch feedbacks from database
  const fetchFeedbacks = async () => {
    try {
      //gets response from the database
      const response = await getFeedbacks();
      setFeedbacks(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  //search feature
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");

  const filteredFeedbacks = feedbacks.filter((feedback) => {
    const matchesSearch =
      feedback.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = searchDate
      ? new Date(feedback.createdAt).toISOString().split("T")[0] === searchDate
      : true;

    return matchesSearch && matchesDate;
  });

  return (
    <>
      <DashboardNav />
      <hr className="text-gray-300 " />
      <FeedbackForm fetchFeedbacks={fetchFeedbacks} />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchDate={searchDate}
        setSearchDate={setSearchDate}
      />
      <p className="text-gray-700 px-30">Showing entries</p>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback._id}
          feedback={feedback}
          fetchFeedbacks={fetchFeedbacks}
        />
      ))}

      <hr className="text-gray-300 " />
      <FooterComp />
    </>
  );
}

export default Dashboard;
