const Feedback = require("../models/FeedbackModel");


// CREATE FEEDBACK
const createFeedback = async (req, res) => {

  try {

    const feedback = await Feedback.create(req.body);

    res.status(201).json(feedback);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};


// GET ALL FEEDBACKS
const getFeedbacks = async (req, res) => {

  try {

    const feedbacks = await Feedback.find().sort({
      createdAt: -1,
    });

    res.json(feedbacks);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};


// DELETE FEEDBACK
const deleteFeedback = async (req, res) => {

  try {

    await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      message: "Feedback deleted",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};


module.exports = {
  createFeedback,
  getFeedbacks,
  deleteFeedback,
};