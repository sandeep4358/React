import GHButton from "../button/GHButton";
import styles from "./GithubLogin.module.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
/**below is the custom hook designe by sandeep **/
import useAuth from "../../hooks/useAuth";

import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";

const GithubLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  //from location is the location of the page from where those came.
  const fromLocation = location.state?.from?.pathname || "/";

  const onSignIn = async (data) => {
    console.log("data >> " + data?.userName);

    try {
      /** when login is done then the data is being passed to the userContext object. */
      const response = await axios.post("/accessToken", data);
      const accessToke = response?.data?.data?.token;
      const stringRoles = response?.data?.data?.roles; //roles is in the string format
      const roles = stringRoles.split(","); // now converted into arrays.
      const user = response?.data?.data?.user;
      setAuth({ user, accessToke, roles });
      console.log("moving to the page where it comes from location");
      navigate(fromLocation, { replace: true });
    } catch (error) {
      if (!error?.response) {
        console.log("No server Response.");
      } else if (error.response?.status === 404) {
        console.log(error.response?.data?.data?.message);
      } else if (error.response?.status === 401) {
        console.log("Unauthorized.");
      } else {
        console.log(error.response?.status);
        console.log("Login faile.");
      }
    } finally {
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="images/GitHub-Logo.png" alt="logo" />
        </div>

        <div className={styles.heading}>
          <h1> Sign in to GitHub</h1>
        </div>
        <form onSubmit={handleSubmit(onSignIn)}>
          <section className={styles.form}>
            <div className={styles.form_controller}>
              <label htmlFor="userName">Username or email address</label>
              <input
                type="text"
                id="userName"
                name="userName"
                {...register("userName", { required: true })}
              />
              {errors.userName?.type === "required" && (
                <p role="alert" className="error_msg">
                  UserId is required
                </p>
              )}
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="error_msg">
                  Password is required
                </p>
              )}
            </div>
            <a href="/password_reset">Forget password</a>
            <GHButton text="Sign in"></GHButton>
          </section>
        </form>
        <section className={styles.create_account}>
          <a href=""> Sign in with a passkey</a>
          <p>
            New to GitHub? <a href="">Create an account</a>
          </p>
        </section>
      </div>
    </>
  );
};

export default GithubLogin;
