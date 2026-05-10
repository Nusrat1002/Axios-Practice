import { useState, Fragment, useEffect } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchTodos = async () => {
    setLoading(true);
    try{
        const response = await axios.get("https://dummyjson.com/todos");
    setTodos(response.data.todos);
    }
    catch (error){
        setError(error);
    }
    finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1 className="bg-blue-800 font-extrabold text-3xl text-center text-cyan-300">
        Todos Start
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        todos.map((todo) => (
          <Fragment key={todo.id}>
            <h2>{todo.todo}</h2>
            <hr />
          </Fragment>
        ))
      )}
      {error && <h1>{error.message}</h1>}
    </div>
  );
};

export default Todo;
