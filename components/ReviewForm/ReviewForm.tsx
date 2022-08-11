import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.scss';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Rating } from '../Rating/Rating';
import { Success } from '../Success/Success';
import CloseIcon from './icon-close.svg';
import { IReviewForm } from './ReviewFrom.interface';

export const ReviewForm = ({ className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form, className)} {...props}>
        <Input
          {...register('name', { required: ' Заполните имя' })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register('title', { required: ' Заполните заголовок' })}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
        />
        <div className={styles.rating}>
          {errors.rating ? (
            <span className={styles.error}>{errors.rating.message}</span>
          ) : (
            <span>Оценка:</span>
          )}
          <Controller
            name="rating"
            control={control}
            rules={{ required: 'Поставьте оценку!' }}
            render={({ field }) => (
              <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
            )}
          />
        </div>
        <Textarea
          {...register('description', { required: ' Заполните описание' })}
          className={styles.textarea}
          placeholder="Текст отзыва"
          error={errors.description}
        />
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
    </form>
  );
};
