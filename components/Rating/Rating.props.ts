import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}
