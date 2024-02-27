import { FC } from "react";
import { Login, Name } from "../App";

interface UserProps {
  login: Login;
  name: Name;
  email: string;
}

const User: FC<UserProps> = ({ login, name, email }) => {
  return (
    <>
      <li>
        <div>
          Login : {login.uuid} / {login.username}{" "}
        </div>
        <div>
          Name: {name.first} {name.last}
        </div>
        <div>Email: {email}</div>
        <hr />
      </li>
    </>
  );
};

export default User;
