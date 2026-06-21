const express =
require("express");

const mongoose =
require("mongoose");

const dotenv =
require("dotenv");

const cors =
require("cors");

dotenv.config();

const authRoutes =
require(
"./routes/authRoutes"
);
const projectRoutes =
require(
"./routes/projectRoutes"
);
const taskRoutes =
require("./routes/taskRoutes");
const app =
express();

app.use(express.json());

app.use(cors());

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/tasks",
  taskRoutes
);

mongoose
.connect(
  process.env.MONGO_URI
)
.then(() => {
  console.log(
    "MongoDB Connected"
  );
})
.catch((error) => {
  console.log(error);
});

app.get(
  "/",
  (req, res) => {
    res.send(
      "Task Management API Running"
    );
  }
);

const PORT =
process.env.PORT || 5000;

app.listen(
  PORT,
  () => {
    console.log(
      `Server Running On Port ${PORT}`
    );
  }
);