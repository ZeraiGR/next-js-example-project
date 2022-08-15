import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.scss';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Rating } from '../Rating/Rating';
import { Panel } from '../Panel/Panel';
import CloseIcon from './icon-close.svg';
import { IReviewForm, IReviewResponseData } from './ReviewFrom.interface';
import axios from 'axios';
import { API } from '../../api/api';
import Error from 'next/error';

export const ReviewForm = ({
  productid,
  isOpened,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  let result;

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewResponseData>(API.review.createDemo, {
        ...formData,
        productid,
      });

      if (data.message) {
        setIsSuccess(true);
        setError(null);
      }
    } catch (e) {
      result = e as Error;
      setError('Ошибка:' + result);
      setIsSuccess(false);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: ' Заполните имя' } })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', { required: { value: true, message: ' Заполните заголовок' } })}
          className={styles.title}
          placeholder="Заголовок отзыва"
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          {errors.rating ? (
            <span className={styles.error} role="alert">
              {errors.rating.message}
            </span>
          ) : (
            <span>Оценка:</span>
          )}
          <Controller
            name="rating"
            control={control}
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                tabIndex={isOpened ? 0 : -1}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' },
          })}
          className={styles.textarea}
          placeholder="Текст отзыва"
          error={errors.description}
          aria-label="Текст отзыва"
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button
            className={styles.btn}
            appearance="primary"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}>
            Отправить
          </Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && (
        <Panel type="success" role="alert">
          <strong className={styles.successTitle}>Ваш отзыв успешно отправлен!</strong>
          <p className={styles.succesDescr}>
            После того, как отзыв пройдёт модерацию, мы сможем его отобразить.
          </p>
          <button
            className={styles.closeBtn}
            type="button"
            aria-label={'Закрыть оповещение'}
            onClick={() => setIsSuccess(false)}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </Panel>
      )}
      {error && (
        <Panel type="error" role="alert">
          <p className={styles.errorDescr}>
            Что-то пошло не так, попробуйте перезагрузить страницу
          </p>
          <button
            className={styles.closeBtn}
            type="button"
            aria-label="Закрыть оповещение"
            onClick={() => setIsSuccess(false)}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </Panel>
      )}
    </form>
  );
};
