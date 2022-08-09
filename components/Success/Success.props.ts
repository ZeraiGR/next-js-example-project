import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SuccessProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
