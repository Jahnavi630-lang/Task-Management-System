import { useState } from "react";

function CreateProject() {

  const [projectName,
  setProjectName] =
  useState("");

  const [description,
  setDescription] =
  useState("");

  const createProject =
  () => {

    alert(
      "Project Created Successfully"
    );

  };

  return (
    <div
      style={{
        textAlign:"center",
        marginTop:"50px"
      }}
    >
      <h1>
        Create Project
      </h1>

      <input
        placeholder="Project Name"
        value={projectName}
        onChange={(e)=>
          setProjectName(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        placeholder="Description"
        value={description}
        onChange={(e)=>
          setDescription(
            e.target.value
          )
        }
      />

      <br /><br />

      <button
        onClick={createProject}
      >
        Create
      </button>
    </div>
  );
}

export default CreateProject;