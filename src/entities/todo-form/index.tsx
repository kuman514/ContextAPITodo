import { BaseTextInput } from '^/shared/base-test-input';

import './style.css';

interface Props {
  title: string;
  content: string;
  onChangeTitle: (newTitle: string) => void;
  onChangeContent: (newContent: string) => void;
}

export function TodoForm({
  title,
  content,
  onChangeTitle,
  onChangeContent,
}: Props) {
  return (
    <div className="todo-form">
      <div className="todo-input">
        <span className="todo-title">Title</span>
        <BaseTextInput
          isMultiLine={false}
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div className="todo-input">
        <span className="todo-title">Content</span>
        <BaseTextInput isMultiLine value={content} onChange={onChangeContent} />
      </div>
    </div>
  );
}
