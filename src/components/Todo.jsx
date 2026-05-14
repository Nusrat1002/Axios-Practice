import { Fragment } from "react";
import { useFetch } from "../hooks/useFetch";

const Todo = () => {
  const {data:todos, loading, errors} = useFetch("/todos");
   
  return (
    <div>
      <h1 className="bg-blue-800 font-extrabold text-3xl text-center text-cyan-300">
        Todos Start
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        todos.todos.map((todo) => (
          <Fragment key={todo.id}>
            <h2>{todo.todo}</h2>
            <hr />
          </Fragment>
        ))
      )}
      {errors && <h1>{errors.message}</h1>}
    </div>
  );
};

export default Todo;
