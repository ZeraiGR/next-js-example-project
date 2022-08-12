import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'success' | 'error';
  children: ReactNode;
}
