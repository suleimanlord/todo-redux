import React from "react";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className={styles.list_item}>
        <input
          type="checkbox"
          onChange={() => dispatch(changeTodoStatus(todo.id))}
        />
        <p className={todo.status ? styles.completed : styles.undone}>
          {todo.body}
        </p>
        <button>delete</button>
        <button>edit</button>
      </li>
    </div>
  );
};

export default TodoItem;
