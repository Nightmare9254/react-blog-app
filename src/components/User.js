import React, { useEffect, useState } from 'react';
import { imgTab } from '../userImg';

function User({ userId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  });

  return (
    <div className="user">
      {users.map((user) => (
        <p className="user-name">
          Created by: <br />
          <span className="user-name-span">{user.name}</span>
        </p>
      ))}
      <img src={imgTab[userId]} className="user-img"></img>
    </div>
  );
}

export default User;
