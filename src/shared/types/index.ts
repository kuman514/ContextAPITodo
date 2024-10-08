export interface TodoItem {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface TodoItemContext {
  data: TodoItem[];
  createTodoItem: (newTodoItem: TodoItem) => void;
  modifyTodoItem: (
    targetTodoItemId: TodoItem['id'],
    newTodoItem: TodoItem
  ) => void;
  deleteTodoItem: (targetTodoItemId: TodoItem['id']) => void;
}

export enum ButtonType {
  FILLED = 'filled',
  OUTLINE = 'outline',
  FILLED_DANGER = 'filled-danger',
  OUTLINE_DANGER = 'outline-danger',
}
