import { useEffect, useMemo, useState } from 'react';

import { TodoForm } from '^/entities/todo-form';
import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';
import { AppMode, ButtonType } from '^/shared/types';

import './style.css';

export function ModifyTodo() {
  const data = useTodoContext((context) => context.data);
  const selectedTodoId = useTodoContext((context) => context.selectedTodoId);
  const modifyTodoItem = useTodoContext((context) => context.modifyTodoItem);
  const setAppMode = useTodoContext((context) => context.setAppMode);

  const selectedTodo = useMemo(
    () => data.find((todoItem) => todoItem.id === selectedTodoId),
    [data, selectedTodoId]
  );

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!selectedTodo) {
      return;
    }
    setTitle(selectedTodo.title);
    setContent(selectedTodo.content);
  }, [selectedTodo]);

  return selectedTodo ? (
    <div className="modify-todo">
      <h1 className="modify-todo-title">Modify {selectedTodo.title}</h1>
      <TodoForm
        title={title}
        content={content}
        onChangeTitle={setTitle}
        onChangeContent={setContent}
      />
      <div className="button-area">
        <BaseButton
          onClick={() => {
            if (title.length === 0) {
              return;
            }
            modifyTodoItem(selectedTodo.id, {
              ...selectedTodo,
              title,
              content,
              modifiedAt: new Date(),
            });
            setAppMode(AppMode.DETAIL);
          }}
        >
          Modify
        </BaseButton>
        <BaseButton
          type={ButtonType.OUTLINE}
          onClick={() => {
            setAppMode(AppMode.DETAIL);
          }}
        >
          Cancel
        </BaseButton>
      </div>
    </div>
  ) : (
    <div className="empty-todo-detail">
      <h1>Please select or create a todo item in the left sidebar.</h1>
    </div>
  );
}
