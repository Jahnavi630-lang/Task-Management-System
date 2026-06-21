import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/create-project"
          element={<CreateProject />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/create-task"
          element={<CreateTask />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;