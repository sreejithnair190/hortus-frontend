import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../utils/formInput/formInput";
import Button from "../utils/button/button";
import "./form.css";

const SignIn = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate()

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
      console.log(response);
      if (response.status === 200) {
        const data = response.data;
        if (data.token) {
          localStorage.setItem("jwtToken", data.token);
          if(localStorage.getItem("jwtToken")){
            alert("Successfully Logged In.");
            navigate('/');
          }
        }else{
          alert('Something went wrong. Please try again later.')
        }
      }
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <form method="post" className="auth-form">
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
      <Button label="Submit" className="submit" onClick={handleClick} />
      <p className="auth-info">
        Don't have an acount? <a href="#">Sign Up</a>
      </p>
    </form>
  );
};

const Auth = () => {
  return (
    <div className="form-container">
      <SignIn />
    </div>
  );
};

export default Auth;
