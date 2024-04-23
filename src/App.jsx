import { useEffect, useState } from "react";

export default function App() { 
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    async function getTodos () {
      const res = await fetch ("api/todos");
      const todos = await res.json();
      setTodos(todos);
    }
    getTodos();
  },[]);
  

  return (
    <main className="container">
      <h1 className="title">Awesome Todos</h1>
      {(todos.length > 0 ) &&
        todos.map((todo) => {
          return (
            <div key={todo._id} className="todo">
              <p>{todo.todo}</p>
              <div>
                <button>
                  {(todo.status) ? "☑" : "☐"}
                </button>
              </div>
            </div>
          );
        })}
    </main>
  );
      } 