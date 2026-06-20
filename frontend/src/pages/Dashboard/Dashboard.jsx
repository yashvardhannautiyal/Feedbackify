import React, { useEffect, useState } from 'react'
import NavbarComp from '../../components/NavbarComp'
import FeedbackForm from '../../components/FeedbackForm'
import FooterComp from '../../components/FooterComp'
import SearchBar from '../../components/SearchBar'
import FeedbackItem from '../../components/FeedbackItem'
import { getFeedbacks } from '../../services/feedbackServices'


function Dashboard() {

  const [feedbacks, setFeedbacks] = useState([]);
  //function to fetch feedbacks from database
  const fetchFeedbacks = async() =>{
    try{
      //gets response from the database
      const response = await getFeedbacks();
      setFeedbacks(response.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
  fetchFeedbacks();
}, []);

  return (
    <>
    <NavbarComp />
    <hr className="text-gray-300 " />
    <FeedbackForm fetchFeedbacks = {fetchFeedbacks} />
    <SearchBar />
    <p className="text-gray-700 px-30">Showing entries</p>
    {feedbacks.map((feedback) =>(
      <FeedbackItem 
        key={feedback._id}
        feedback={feedback}
        fetchFeedbacks={fetchFeedbacks}    />
    ))}
    
    <hr className="text-gray-300 " />
    <FooterComp />
    </>
  )
}

export default Dashboard
