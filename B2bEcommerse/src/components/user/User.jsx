import { useEffect, useState } from "react";

import axios from '../../api/axios' ;

const User = () => {
  const [users, setUsers] = useState();

    useEffect(()=>{
        let isMounted = 
    })

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};

export default User;
