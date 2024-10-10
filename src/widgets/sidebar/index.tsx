import { TodoList } from '^/features/todo-list';

import { BaseButton } from '^/shared/base-button';
import { useTodoContext } from '^/shared/context';
import { AppMode } from '^/shared/types';

import './style.css';

export function Sidebar() {
  const { setAppMode, selectTodoId } = useTodoContext();

  return (
    <div className="sidebar">
      <div className="create-todo-area">
        <BaseButton
          onClick={() => {
            setAppMode(AppMode.CREATE);
            selectTodoId(-1);
          }}
        >
          Create Todo
        </BaseButton>
      </div>
      <TodoList />
    </div>
  );
}
