import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  nextFocusElementRef?: React.RefObject<HTMLTextAreaElement>;
}
