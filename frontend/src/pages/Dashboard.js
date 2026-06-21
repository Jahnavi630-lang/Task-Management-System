import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        Project Management Dashboard
      </h1>

      <h3>
        Total Projects: 5
      </h3>

      <h3>
        Total Tasks: 12
      </h3>

      <h3>
        Completed Tasks: 4
      </h3>

      <hr />

      <h2>
        Project Progress
      </h2>

      <h3>
        Task Tracker Project
      </h3>

      <progress
        value="70"
        max="100"
      ></progress>

      <p>
        70% Completed
      </p>

      <br />

      <Link to="/projects">
        Projects
      </Link>

      <br /><br />

      <Link to="/tasks">
        Tasks
      </Link>

      <br /><br />

      <Link to="/profile">
        Profile
      </Link>
    </div>
  );
}

export default Dashboard;