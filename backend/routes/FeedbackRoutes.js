const express = require("express");
const router = express.Router();

const{
     createFeedback,
    getFeedbacks,
    deleteFeedback
} = require("../controllers/FeedbackController");

//create feedback
router.post("/", createFeedback);

//get all feedbacks
router.get("/", getFeedbacks);


//delete feedback
router.delete("/:id", deleteFeedback);


module.exports = router;