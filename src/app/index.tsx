import { TodoDetail } from '^/features/todo-detail';
import { TodoList } from '^/features/todo-list';
import { TodoContextProvider } from '^/shared/context';

export function App() {
  return (
    <TodoContextProvider>
      <main
        style={{
          width: '100vw',
          height: '100dvh',
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
        }}
      >
        <TodoList />
        <TodoDetail />
      </main>
    </TodoContextProvider>
  );
}
