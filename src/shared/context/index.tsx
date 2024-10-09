import { createContext, ReactNode, useContext, useState } from 'react';

import { AppMode, TodoItem, TodoItemContext } from '^/shared/types';

const TodoContext = createContext<TodoItemContext>({
  data: [],
  selectedTodoId: -1,
  appMode: AppMode.DETAIL,
  selectTodoId: () => {},
  createTodoItem: () => {},
  modifyTodoItem: () => {},
  deleteTodoItem: () => {},
  setAppMode: () => {},
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
  const [appMode, setAppMode] = useState<AppMode>(AppMode.DETAIL);

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
        appMode,
        selectTodoId: setSelectedTodoId,
        createTodoItem,
        modifyTodoItem,
        deleteTodoItem,
        setAppMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
