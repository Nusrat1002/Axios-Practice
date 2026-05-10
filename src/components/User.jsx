import { useState, Fragment, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="bg-blue-800 font-extrabold text-3xl text-center text-cyan-300">
        Users Information
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        users.map((user) => (
          <Fragment key={user.id}>
            <div>
              <h1>{user.firstName}</h1>
              <h1>{user.lastName}</h1>
              <h1>{user.email}</h1>
            </div>
            <hr />
          </Fragment>
        ))
      )}
      {error && <h1>{error.message}</h1>}
    </div>
  );
};

export default User;
