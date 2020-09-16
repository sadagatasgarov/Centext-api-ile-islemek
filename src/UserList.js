import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import User from "./User";

const UserList = ({ users}) => {
  const deger = useContext(UserContext);
  console.log(deger);

  return (
    <>
      <h2>User List</h2>
      {deger.users.map((user) => (
        <User key={user.name} user={user}/>
      ))}
    </>
  );
};

export default UserList;
