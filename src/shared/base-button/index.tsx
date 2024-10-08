import { ReactNode } from 'react';

import { ButtonType } from '^/shared/types';
import './style.css';

interface Props {
  children: ReactNode;
  type?: ButtonType;
  onClick: () => void;
}

export function BaseButton({
  children,
  type = ButtonType.FILLED,
  onClick,
}: Props) {
  return (
    <button className={`base-button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
