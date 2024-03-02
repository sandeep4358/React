import { useForm } from "react-hook-form";
import "./SignUp.css";
import { UserDetails } from "../../type";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL, REGISTER_USER } from "../../constant";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [userDtl, setUserDtl] = useState<UserDetails>();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserDetails>();
  const navigate = useNavigate();

  const onSubmit = async (inputData: UserDetails) => {
    setUserDtl(inputData);
    console.log("data : ", inputData);

    try {
      const { result } = await axios.post(BASE_API_URL + REGISTER_USER, {
        ...inputData,
      });
      setErrorMsg("");
      setSuccessMsg("User register successFully...");
    } catch (error) {
      console.error(error);
      setSuccessMsg("");
      setErrorMsg("Some problem occure. Please try again sometime...");
    }

    setTimeout(() => {
      setSuccessMsg("");
      navigate("/login");
    }, 3000);
  };

  return (
    <div>
      <div className="main_container">
        <h1> Sign Up</h1>
        <div className="form_container">
          <form onSubmit={handleSubmit(onSubmit)}>
            {successMsg && <p className="success_msg">{successMsg}</p>}
            {errorMsg && <p className="error_Msg">{errorMsg}</p>}
            <div className="form_controller">
              <label htmlFor="userId">User Id</label>
              <input
                id="userId"
                {...register("userId", { required: true })}
              ></input>
              {errors.userId && (
                <p className="error_msg">Please enter userId</p>
              )}
            </div>
            <div className="form_controller">
              <label htmlFor="userName">User Name</label>
              <input
                id="userName"
                {...register("userName", { required: true })}
              ></input>
              {errors.userName && (
                <p className="error_msg">Please enter name.</p>
              )}
            </div>
            <div className="form_controller">
              <label htmlFor="roles">User Type</label>
              <select id="userType" {...register("roles", { required: true })}>
                <option value="">Select User type</option>
                <option value="ROLE_ADMIN">Admin</option>
                <option value="ROLE_USER">User</option>
                <option value="ROLE_USER,ROLE_ADMIN">Both</option>
              </select>

              {errors.roles && (
                <p className="error_msg">Please enter user type.</p>
              )}
            </div>
            <div className="form_controller">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password", { required: true })}
              ></input>
              {errors.password && (
                <p className="error_msg">Please enter password</p>
              )}
            </div>
            <div className="form_controller">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                id="mobileNumber"
                {...register("mobileNumber", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                })}
              ></input>
              {errors.mobileNumber && (
                <p className="error_msg">Please enter mobile number.</p>
              )}
            </div>
            <div className="form_controller">
              <label htmlFor="emailId">Email </label>
              <input
                id="emailId"
                {...register("emailId", {
                  required: true,
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              ></input>
              {errors.emailId && (
                <p className="error_msg">Please enter email Id.</p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
