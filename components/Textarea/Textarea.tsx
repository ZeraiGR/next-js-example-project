import React from 'react';
import cn from 'classnames';

import { TextAreaProps } from './Textarea.props';
import styles from './Textarea.module.scss';

export const Textarea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};
