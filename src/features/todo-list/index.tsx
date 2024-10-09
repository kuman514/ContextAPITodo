import { TodoListItem } from '^/entities/todo-list-item';
import { useTodoContext } from '^/shared/context';

import './style.css';

export function TodoList() {
  const { data } = useTodoContext();
  return (
    <ul className="todo-list">
      {data.map(({ id, title }) => (
        <TodoListItem key={`todo-list-item-${id}`} todoItem={{ id, title }} />
      ))}
    </ul>
  );
}
