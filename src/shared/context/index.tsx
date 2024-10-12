import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { AppMode, TodoItem, TodoItemContext } from '^/shared/types';

const DEFAULT_TODOS: TodoItem[] = [
  {
    id: 0,
    title: 'Context API Practice',
    content: 'Yasuo is science.',
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: 1,
    title: 'by kuman514',
    content: 'If you win, you are Maverick. If you lose, you are Yasuo.',
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: 2,
    title: 'Koishi is an adorable Aggie',
    content: 'Koishi Komeiji is an adorable baby. Aggie Koishi Aggie Hoshino.',
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

function loadFromStorage() {
  const rawData = localStorage.getItem('context-api-practice-todo-items');

  if (!rawData) {
    return DEFAULT_TODOS;
  }

  const restoredData = JSON.parse(rawData) as TodoItem[];
  return restoredData.map((todo) => ({
    ...todo,
    createdAt: new Date(todo.createdAt),
    modifiedAt: new Date(todo.modifiedAt),
  }));
}

function saveToStorage(data: TodoItem[]) {
  localStorage.setItem('context-api-practice-todo-items', JSON.stringify(data));
}

const TodoContext = createContext<TodoItemContext | null>(null);

/**
 * @description
 * `TodoContext` is designed to be only in `TodoContextProvider`.
 * Therefore, if `TodoContext` is used outside `TodoContextProvider`, it will throw an error.
 */
export function useTodoContext<SelectedType = TodoItemContext>(
  selector: (context: TodoItemContext) => SelectedType = (
    context: TodoItemContext
  ) => context as SelectedType
) {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(
      'The Todo Context should be only in Todo Context Provider.'
    );
  }

  return selector(context);
}

interface TodoContextProviderProps {
  children?: ReactNode;
}

export function TodoContextProvider({ children }: TodoContextProviderProps) {
  const [selectedTodoId, setSelectedTodoId] = useState<TodoItem['id']>(-1);
  const [todos, setTodos] = useState<TodoItem[]>(loadFromStorage());
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

  useEffect(() => {
    saveToStorage(todos);
  }, [todos]);

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
