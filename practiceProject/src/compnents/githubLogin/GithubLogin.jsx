import GHButton from "../button/GHButton";
import styles from "./GithubLogin.module.css";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import axios from "../api/axios";

const GithubLogin = () => {
  const { setAuth } = useContext(AuthContext);

  const onSignIn = async (data) => {
    console.log("data >> " + data?.userName);

    try {
      /** when login is done then the data is being passed to the userContext object. */
      const response = await axios.post("/accessToken", data);
      const accessToke = response?.data?.data?.token;
      const roles = response?.data?.data?.roles;
      setAuth({ accessToke, roles });
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
