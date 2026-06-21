const express =
require("express");

const router =
express.Router();

const {
  createTask,
  getTasks,
  updateTaskStatus
} =
require(
"../controllers/taskController"
);

router.post(
  "/create",
  createTask
);

router.get(
  "/all",
  getTasks
);

router.put(
  "/status/:id",
  updateTaskStatus
);

module.exports = router;