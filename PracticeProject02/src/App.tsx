import { FC, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./user/User";

interface AppProps {
  title: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
}

export interface Users {
  name: Name;
  email: string;
  login: Login;
}

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      console.log(data);
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>TypeScript Demo {title}</h1>
      <div className="userList">
        <ul>
          {isLoading ? <p>Loading....</p> : ""}
          {users.map(({ login, name, email }) => {
            return <User login={login} name={name} email={email} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
