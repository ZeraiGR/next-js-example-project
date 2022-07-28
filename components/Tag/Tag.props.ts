import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: 'small' | 'big';
  appearance: 'ghost' | 'accent' | 'gray' | 'green' | 'red';
  children: ReactNode;
  href?: string;
}
