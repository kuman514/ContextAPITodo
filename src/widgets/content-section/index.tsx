import { CreateTodo } from '^/features/create-todo';
import { ModifyTodo } from '^/features/modify-todo';
import { TodoDetail } from '^/features/todo-detail';
import { useTodoContext } from '^/shared/context';
import { AppMode } from '^/shared/types';

export function ContentSection() {
  const appMode = useTodoContext((context) => context.appMode);

  switch (appMode) {
    case AppMode.CREATE:
      return <CreateTodo />;
    case AppMode.MODIFY:
      return <ModifyTodo />;
    case AppMode.DETAIL:
      return <TodoDetail />;
    default:
      return null;
  }
}
