import { useEffect, useMemo, useState } from 'react';

import { TodoForm } from '^/entities/todo-form';
import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';

import './style.css';

export function ModifyTodo() {
  const { data, selectedTodoId, modifyTodoItem } = useTodoContext();

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
          setTitle('');
          setContent('');
        }}
      >
        Modify
      </BaseButton>
    </div>
  ) : (
    <div className="empty-todo-detail">
      <h1>Please select or create a todo item in the left sidebar.</h1>
    </div>
  );
}
