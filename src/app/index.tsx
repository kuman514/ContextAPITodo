import { TodoContextProvider } from '^/shared/context';

export function App() {
  return (
    <TodoContextProvider>
      <main>Get ready for the next battle!</main>
    </TodoContextProvider>
  );
}
