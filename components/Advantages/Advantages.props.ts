import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PageAdvantage } from '../../interfaces/page.interface';

export interface AdvantagesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  advantages: PageAdvantage[];
}
