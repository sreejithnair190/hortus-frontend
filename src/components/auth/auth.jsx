import { useState } from "react";
import axios from "axios";
import "./auth.css";
import "./form.css";

const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  // const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        formFields
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data.token);
        alert(data.status)
      }
      console.log(response);
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form method="post" className="form">
      <p className="title">Login</p>
      <label>
        <input
          required
          placeholder="Email"
          type="email"
          className="input"
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          required
          placeholder="Password"
          type="password"
          className="input"
          name="password"
          onChange={handleChange}
        />
      </label>
      <button className="submit" onClick={handleClick}>
        Submit
      </button>
      <p className="signin">
        Don't have an acount? <a href="#">Sign Up</a>
      </p>
    </form>
  );
};

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
    </div>
  );
};

export default Auth;
