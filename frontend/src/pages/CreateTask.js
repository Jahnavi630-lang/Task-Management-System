import { useState } from "react";

function CreateTask() {

  const [title,setTitle] =
  useState("");

  const [priority,setPriority] =
  useState("Medium");

  const [deadline,setDeadline] =
  useState("");

  const createTask = () => {

    if(!title){
      alert("Task Name Required");
      return;
    }

    alert(
      "Task Created Successfully"
    );
  };

  return (
    <div
      style={{
        textAlign:"center",
        marginTop:"50px"
      }}
    >
      <h1>Create Task</h1>

      <input
        placeholder="Task Name"
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
      />

      <br /><br />

      <select
        value={priority}
        onChange={(e)=>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <br /><br />

      <input
        type="date"
        value={deadline}
        onChange={(e)=>
          setDeadline(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={createTask}
      >
        Create Task
      </button>
    </div>
  );
}

export default CreateTask;