import React, { useEffect, useRef, useState } from "react";

const Filter = () => {
  const [users, setUsers] = useState(null);

  const [filteredUsers, setFilteredUsers] = useState(null);

  const inputRef = useRef("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleFilter = () => {
    let inputState = inputRef.current.value.toLowerCase();

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(inputState)
    );

    setFilteredUsers(filtered);
  };

  if (filteredUsers === null) {
    return "Loading....";
  }

  return (
    <div className="filter-area">
      <h1>Search Users</h1>
      <input type="text" ref={inputRef} onChange={handleFilter} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            Name: {user.name} | Phone: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
