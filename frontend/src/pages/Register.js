import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("member");

  const navigate =
    useNavigate();

  const registerUser =
    async () => {

      try {

        await axios.post(
          "https://task-management-system-8oso.onrender.com/api/auth/register",
          {
            name,
            email,
            password,
            role
          }
        );

        alert(
          "Registration Successful"
        );

        navigate("/");

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Registration Failed"
        );

      }
    };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <select
        value={role}
        onChange={(e) =>
          setRole(e.target.value)
        }
      >
        <option value="member">
          Member
        </option>

        <option value="manager">
          Manager
        </option>

        <option value="admin">
          Admin
        </option>
      </select>

      <br /><br />

      <button
        onClick={registerUser}
      >
        Register
      </button>

      <p>
        Already have account?

        <Link to="/">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;