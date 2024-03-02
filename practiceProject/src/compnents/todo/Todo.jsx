const Todo = ({ toDoArray, deleteTodo, addTodo }) => {
  return (
    <div>
      {toDoArray.map((todo) => {
        return (
          <div>
            <label>{}</label>
            <button
              onClick={() => {
                deleteTodo;
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                addTodo;
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
