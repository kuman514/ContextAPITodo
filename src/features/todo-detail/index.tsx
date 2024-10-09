import { useMemo } from 'react';

import { useTodoContext } from '^/shared/context';
import { convertDateToString } from '^/shared/utils';

import './style.css';

export function TodoDetail() {
  const { data, selectedTodoId } = useTodoContext();

  const selectedTodo = useMemo(
    () => data.find((todoItem) => todoItem.id === selectedTodoId),
    [data, selectedTodoId]
  );

  return selectedTodo ? (
    <div className="todo-detail">
      <h1 className="todo-title">{selectedTodo.title}</h1>
      <div className="todo-at">
        <span>
          <span className="todo-label">Created at</span>{' '}
          {convertDateToString(selectedTodo.createdAt)}
        </span>
        <span>
          <span className="todo-label">Last modified at</span>{' '}
          {convertDateToString(selectedTodo.modifiedAt)}
        </span>
      </div>
      <div>
        <span className="todo-label">Detail</span>
        <p>{selectedTodo.content}</p>
      </div>
    </div>
  ) : (
    <div className="empty-todo-detail">
      <h1>Please select or create a todo item in the left sidebar.</h1>
    </div>
  );
}
