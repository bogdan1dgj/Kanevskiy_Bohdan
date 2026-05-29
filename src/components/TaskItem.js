function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </h3>

      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Скасувати" : "Виконано"}
      </button>

      <button
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: "10px" }}
      >
        Видалити
      </button>
    </div>
  );
}

export default TaskItem;