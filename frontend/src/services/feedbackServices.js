import axios from "axios";

const API_URL = "http://localhost:5000/api/feedback";

//get all feedbacks
export const getFeedbacks = async() =>{
    return await axios.get(API_URL);
}

//add feedback
export const addFeedback = async(feedbackData) =>{
    return await axios.post(API_URL, feedbackData);
}

//delete feedback
export const deleteFeedbacks = async(id) =>{
    return await axios.delete(`${API_URL}/${id}`);
};