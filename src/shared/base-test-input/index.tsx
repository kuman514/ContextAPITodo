import './style.css';

interface Props {
  isMultiLine: boolean;
  value: string;
  onChange: (newValue: string) => void;
}

export function BaseTextInput({ isMultiLine, value, onChange }: Props) {
  return isMultiLine ? (
    <textarea
      className="base-text-input multi-line"
      value={value}
      onChange={(event) => {
        onChange(event.currentTarget.value);
      }}
    />
  ) : (
    <input
      type="text"
      className="base-text-input single-line"
      value={value}
      onChange={(event) => {
        onChange(event.currentTarget.value);
      }}
    />
  );
}
