import { TodoContextProvider } from '^/shared/context';
import { ContentSection } from '^/widgets/content-section';
import { Sidebar } from '^/widgets/sidebar';

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
        <Sidebar />
        <ContentSection />
      </main>
    </TodoContextProvider>
  );
}
