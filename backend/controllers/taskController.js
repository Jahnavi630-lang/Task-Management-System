const Task =
require("../models/Task");

const createTask =
async (req, res) => {
  try {

    if (!req.body.title) {
      return res.status(400).json({
        message:
        "Task Title Required"
      });
    }

    if (
      req.body.deadline &&
      new Date(req.body.deadline)
      < new Date()
    ) {
      return res.status(400).json({
        message:
        "Deadline must be future date"
      });
    }

    const task =
      await Task.create(
        req.body
      );

    res.status(201).json(
      task
    );

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};

const getTasks =
async (req, res) => {
  try {

    const tasks =
      await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};

const updateTaskStatus =
async (req, res) => {
  try {

    const task =
      await Task.findById(
        req.params.id
      );

    if (!task) {
      return res.status(404).json({
        message:
        "Task Not Found"
      });
    }

    task.status =
      req.body.status;

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message:
      error.message
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus
};