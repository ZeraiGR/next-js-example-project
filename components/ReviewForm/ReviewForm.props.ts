import { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productid: string;
  isOpened: boolean;
}
