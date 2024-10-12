import { useTodoContext } from '^/shared/context';
import { ListItem } from '^/shared/list-item';
import { AppMode, TodoItem } from '^/shared/types';

interface Props {
  todoItem: Pick<TodoItem, 'id' | 'title'>;
}

export function TodoListItem({ todoItem: { id, title } }: Props) {
  const selectedTodoId = useTodoContext((context) => context.selectedTodoId);
  const selectTodoId = useTodoContext((context) => context.selectTodoId);
  const setAppMode = useTodoContext((context) => context.setAppMode);

  const isSelected = id === selectedTodoId;

  return (
    <ListItem
      customStyle={
        isSelected
          ? {
              backgroundColor: 'var(--primary-color)',
              fontWeight: '700',
            }
          : {}
      }
      onClick={() => {
        selectTodoId(id);
        setAppMode(AppMode.DETAIL);
      }}
    >
      {title}
    </ListItem>
  );
}
