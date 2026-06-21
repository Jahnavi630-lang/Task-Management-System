function Projects() {

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        Projects
      </h1>

      <hr />

      <h2>
        Task Tracker Project
      </h2>

      <p>
        Project Management System
      </p>

      <p>
        Team Members:
        Jahnavi, Member1, Member2
      </p>

      <p>
        Progress: 70%
      </p>

      <progress
        value="70"
        max="100"
      ></progress>

      <hr />

      <h2>
        Employee Management Project
      </h2>

      <p>
        Employee Tracking System
      </p>

      <p>
        Team Members:
        Admin, Manager
      </p>

      <p>
        Progress: 50%
      </p>

      <progress
        value="50"
        max="100"
      ></progress>

    </div>
  );
}

export default Projects;