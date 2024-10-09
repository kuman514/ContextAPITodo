import { useState } from 'react';

import { TodoForm } from '^/entities/todo-form';
import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';

import './style.css';

export function CreateTodo() {
  const { data, createTodoItem } = useTodoContext();
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
      <BaseButton
        onClick={() => {
          if (title.length === 0) {
            return;
          }
          createTodoItem({
            id: (data.at(-1)?.id ?? -1) + 1,
            title,
            content,
            createdAt: new Date(),
            modifiedAt: new Date(),
          });
          setTitle('');
          setContent('');
        }}
      >
        Create
      </BaseButton>
    </div>
  );
}
