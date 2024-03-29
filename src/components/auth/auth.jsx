import { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import FormInput from "../utils/formInput/formInput";
import Button from "../utils/button/button";
import { UserContext } from "../context/user.context";
import "./form.css";

const SignUp = () => {
  const defaultFormFields = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        formFields
      );
      console.log(response);
      if (response.status === 201) {
        const data = response.data;
        if (data.token) {
          setCurrentUser(data);
          navigate("/")
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form method="post" className="auth-form" onSubmit={handleSubmit}>
      <p className="title">Sign Up</p>
      <FormInput
        required
        placeholder="Name"
        type="text"
        className="input"
        name="name"
        onChange={handleChange}
      />
      <FormInput
        required
        placeholder="Email"
        type="email"
        className="input"
        name="email"
        onChange={handleChange}
      />
      <FormInput
        required
        placeholder="Password"
        type="password"
        className="input"
        name="password"
        onChange={handleChange}
      />
      <FormInput
        required
        placeholder="Confirm Password"
        type="password"
        className="input"
        name="passwordConfirm"
        onChange={handleChange}
      />
      <Button label="Submit" className="submit" type="submit" />
      <p className="auth-info">
        Already have an acount?&nbsp;<Link to='/auth/sign-in'>Sign In</Link>
      </p>
    </form>
  );
};

const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        formFields
      );
      if (response.status === 200) {
        const data = response.data;
        if (data.token) {
          setCurrentUser(data);
          navigate("/");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form method="post" className="auth-form" onSubmit={handleSubmit}>
      <p className="title">Sign In</p>
      <FormInput
        required
        placeholder="Email"
        type="email"
        className="input"
        name="email"
        onChange={handleChange}
      />
      <FormInput
        required
        placeholder="Password"
        type="password"
        className="input"
        name="password"
        onChange={handleChange}
      />
      <Button label="Submit" className="submit" type="submit" />
      <p className="auth-info">
        Don't have an acount?&nbsp;<Link to='/auth/sign-up'>Sign Up</Link>
      </p>
    </form>
  );
};

const Auth = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isSignIn = currentPath === "/auth/sign-in";
  const isSignUp = currentPath === "/auth/sign-up";

  return (
    <div className="form-container">
      {isSignIn && <SignIn />}
      {isSignUp && <SignUp />}
    </div>
  );
};

export default Auth;
