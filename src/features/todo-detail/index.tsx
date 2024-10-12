import { useMemo } from 'react';

import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';
import { AppMode, ButtonType } from '^/shared/types';
import { convertDateToString } from '^/shared/utils';

import './style.css';

export function TodoDetail() {
  const data = useTodoContext((context) => context.data);
  const selectedTodoId = useTodoContext((context) => context.selectedTodoId);
  const deleteTodoItem = useTodoContext((context) => context.deleteTodoItem);
  const setAppMode = useTodoContext((context) => context.setAppMode);

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
        <p className="todo-content">{selectedTodo.content}</p>
      </div>
      <div className="button-area">
        <BaseButton
          type={ButtonType.FILLED}
          onClick={() => {
            setAppMode(AppMode.MODIFY);
          }}
        >
          Modify
        </BaseButton>
        <BaseButton
          type={ButtonType.FILLED_DANGER}
          onClick={() => {
            if (
              window.confirm(`Are you sure to delete ${selectedTodo.title}?`)
            ) {
              deleteTodoItem(selectedTodo.id);
              setAppMode(AppMode.DETAIL);
            }
          }}
        >
          Delete
        </BaseButton>
      </div>
    </div>
  ) : (
    <div className="empty-todo-detail">
      <h1>Please select or create a todo item in the left sidebar.</h1>
    </div>
  );
}
