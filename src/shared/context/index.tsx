import { createContext, ReactNode, useContext, useState } from 'react';

import { TodoItem, TodoItemContext } from '^/shared/types';

const TodoContext = createContext<TodoItemContext>({
  data: [],
  selectedTodoId: -1,
  selectTodoId: () => {},
  createTodoItem: () => {},
  modifyTodoItem: () => {},
  deleteTodoItem: () => {},
});

export function useTodoContext() {
  const context = useContext(TodoContext);
  return context;
}

interface TodoContextProviderProps {
  children?: ReactNode;
}

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [selectedTodoId, setSelectedTodoId] = useState<TodoItem['id']>(-1);
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function createTodoItem(newTodoItem: TodoItem) {
    setTodos(todos.concat([newTodoItem]));
  }

  function modifyTodoItem(targetTodoId: TodoItem['id'], newTodoItem: TodoItem) {
    const newTodos = Array.from(todos);
    const todoIndex = todos.findIndex(
      (todoItem) => todoItem.id === targetTodoId
    );
    newTodos.splice(todoIndex, 1, newTodoItem);
    setTodos(newTodos);
  }

  function deleteTodoItem(targetTodoId: TodoItem['id']) {
    const newTodos = Array.from(todos);
    const todoIndex = todos.findIndex(
      (todoItem) => todoItem.id === targetTodoId
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        data: todos,
        selectedTodoId,
        selectTodoId: setSelectedTodoId,
        createTodoItem,
        modifyTodoItem,
        deleteTodoItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
