import { useNavigate } from "react-router-dom";
import GHButton from "../button/GHButton";
import styles from "./GithubLogin.module.css";
import { useForm } from "react-hook-form";
import { UserDetails } from "../../type";
import axios from "axios";
import { ACCESS_TOKEN, BASE_API_URL } from "../../constant";

const GithubLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserDetails>();

  const onSubmit = async (inputData: UserDetails) => {
    console.log("input data for api call....", inputData);

    try {
      const { data } = await axios.post(BASE_API_URL + ACCESS_TOKEN, inputData);
      console.log(data);
    } catch (error) {
      console.error("error resosne :--------", error);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="images/GitHub-Logo.png" alt="logo" />
        </div>

        <div className={styles.heading}>
          <h1> Sign in </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className={styles.form}>
            <div className={styles.form_controller}>
              <label htmlFor="userName">Username or email address</label>
              <input
                type="text"
                id="userName"
                {...register("userName", { required: true })}
              />
              {errors.userName && (
                <p className="error_msg">Please enter userName</p>
              )}
            </div>
            <div className={styles.form_controller}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error_msg">Please enter password</p>
              )}
            </div>
            <a href="/password_reset">Forget password</a>
            <GHButton isOutline={true} text="Sign in"></GHButton>
          </section>
        </form>
        <section className={styles.create_account}>
          <a href=""> Sign in with a passkey</a>
          <p>
            New to GitHub?{" "}
            <button
              onClick={() => {
                navigate("/sign_up");
              }}
            >
              Create an account
            </button>
          </p>
        </section>
      </div>
    </>
  );
};

export default GithubLogin;
