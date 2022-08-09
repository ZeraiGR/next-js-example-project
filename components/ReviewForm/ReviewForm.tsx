import React from 'react';
import cn from 'classnames';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.scss';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Rating } from '../Rating/Rating';
import { Success } from '../Success/Success';
import CloseIcon from './icon-close.svg';

export const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.form, className)} {...props}>
        <Input placeholder="Имя" />
        <Input className={styles.title} placeholder="Заголовок отзыва" />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <Textarea className={styles.textarea} placeholder="Текст отзыва" />
        <div className={styles.submit}>
          <Button className={styles.btn} appearance="primary">
            Отправить
          </Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <Success>
        <strong className={styles.successTitle}>Ваш отзыв успешно отправлен!</strong>
        <p className={styles.succesDescr}>
          После того, как отзыв пройдёт модерацию, мы сможем его отобразить.
        </p>
        <CloseIcon className={styles.close} />
      </Success>
    </>
  );
};
