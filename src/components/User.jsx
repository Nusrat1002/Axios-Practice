import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";


const User = () => {
 const { data:users, loading, errors } =useFetch("/users")

  return (
    <div>
      <h1 className="bg-blue-800 font-extrabold text-3xl text-center text-cyan-300">
        Users Information
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        users.users.map((user) => (
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
      {errors && <h1>{errors.message}</h1>}
    </div>
  );
};

export default User;
