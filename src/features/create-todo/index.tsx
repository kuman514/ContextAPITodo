import { useState } from 'react';

import { TodoForm } from '^/entities/todo-form';
import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';
import { AppMode, ButtonType } from '^/shared/types';

import './style.css';

export function CreateTodo() {
  const data = useTodoContext((context) => context.data);
  const createTodoItem = useTodoContext((context) => context.createTodoItem);
  const setAppMode = useTodoContext((context) => context.setAppMode);
  const selectTodoId = useTodoContext((context) => context.selectTodoId);

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  return (
    <div className="create-todo">
      <h1 className="create-todo-title">Create Todo</h1>
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

            const newTodoId = (data.at(-1)?.id ?? -1) + 1;
            createTodoItem({
              id: newTodoId,
              title,
              content,
              createdAt: new Date(),
              modifiedAt: new Date(),
            });

            selectTodoId(newTodoId);
            setAppMode(AppMode.DETAIL);
          }}
        >
          Create
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
  );
}
