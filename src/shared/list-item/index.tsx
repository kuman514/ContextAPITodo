import { ReactNode } from 'react';

import './style.css';

interface Props {
  children: ReactNode;
}

export function ListItem({ children }: Props) {
  return <li className="list-item">{children}</li>;
}
