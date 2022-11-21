import React, { useState, useEffect } from "react";

const TestComponent = () => {
  const [userslist, setData] = useState(null);
  const [message, setText] = useState(null);

  const getUserList = async() => {
    const response = await fetch("http://localhost:9000/testapi/users").then(
      (res) => res.json()
    );

    if (response) {
      setData(response);
    }
  }
  
  const getMessage = async() => {
    const response = await fetch("http://localhost:9000/testapi/").then(
      (res) => res.text()
    );

    if (response) {
      setText(response);
    }
  }

  useEffect(() => {
    getUserList();
    getMessage();
  }, []);

  return (
    <div>
      <p>{message}</p>
      <ul>
        {userslist &&
          userslist.map((user) => (
            <>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default TestComponent;
