import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataHH } from '../../interfaces/page.interface';
export interface HHdataProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: DataHH;
  className?: string;
}
