export interface TodoItem {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface TodoItemContext {
  data: TodoItem[];
  selectedTodoId: TodoItem['id'];

  selectTodoId: (targetTodoItemId: TodoItem['id']) => void;
  createTodoItem: (newTodoItem: TodoItem) => void;
  modifyTodoItem: (targetTodoId: TodoItem['id'], newTodoItem: TodoItem) => void;
  deleteTodoItem: (targetTodoId: TodoItem['id']) => void;
}

export enum ButtonType {
  FILLED = 'filled',
  OUTLINE = 'outline',
  FILLED_DANGER = 'filled-danger',
  OUTLINE_DANGER = 'outline-danger',
}
