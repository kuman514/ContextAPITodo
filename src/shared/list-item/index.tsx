import { CSSProperties, ReactNode } from 'react';

import './style.css';

interface Props {
  children: ReactNode;
  customStyle?: CSSProperties;
  onClick: () => void;
}

export function ListItem({ children, customStyle, onClick }: Props) {
  return (
    <li className="list-item" style={customStyle} onClick={onClick}>
      {children}
    </li>
  );
}
