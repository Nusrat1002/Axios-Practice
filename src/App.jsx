import { useState, Fragment, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Fragment key={user.id}>
          <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.email}</h1>
          </div>
          <hr />
        </Fragment>
      ))}
    </div>
  );
};

export default App;
