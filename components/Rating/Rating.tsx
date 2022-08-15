import React, { ForwardedRef, KeyboardEvent } from 'react';
import cn from 'classnames';

import StarIcon from './star.svg';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';

export const Rating = React.forwardRef(
  (
    { rating, isEditable = false, setRating, className, tabIndex, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLUListElement>,
  ): JSX.Element => {
    const [ratingArr, setRatingArr] = React.useState<JSX.Element[]>(
      new Array(5)
        .fill(<></>)
        .map((el: JSX.Element, i: number) => <React.Fragment key={i}></React.Fragment>),
    );

    React.useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex]);

    const ratingElemsRef = React.useRef<(HTMLLIElement | null)[]>([]);

    const showRating = (rating: number) => {
      if (isEditable) {
        constructRating(rating);
      }
    };

    const setRatingWithMouse = (rating: number) => {
      if (isEditable && setRating != undefined) {
        setRating(rating);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (!isEditable || !setRating) {
        return;
      }

      if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (!rating) {
          setRating(1);
        } else {
          setRating(rating < 5 ? rating + 1 : 5);
        }

        ratingElemsRef.current[rating]?.focus();
      }

      if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
        ratingElemsRef.current[rating - 2]?.focus();
      }
    };

    const calculateTabIndex = (rating: number, i: number) => {
      if (!isEditable) {
        return -1;
      }

      if (!rating && i === 0) {
        return tabIndex ?? 0;
      }

      if (rating === i + 1) {
        return tabIndex ?? 0;
      }

      return -1;
    };

    const constructRating = (currentRating: number) => {
      const handledRatingArr = ratingArr.map((r: JSX.Element, i: number) => (
        <li
          key={i}
          className={cn(styles.rate, { [styles.isEdit]: isEditable })}
          onMouseEnter={() => showRating(i + 1)}
          onMouseLeave={() => showRating(rating)}
          onClick={() => setRatingWithMouse(i + 1)}
          onKeyDown={handleKey}
          tabIndex={calculateTabIndex(rating, i)}
          ref={(r) => ratingElemsRef.current.push(r)}
          role={isEditable ? 'slider' : ''}
          aria-valuenow={rating}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-label={isEditable ? 'Укажите рейтинг' : ''}
          aria-invalid={error ? true : false}>
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
            })}
          />
        </li>
      ));

      setRatingArr(handledRatingArr);
    };

    return (
      <ul className={cn(styles.rating, className)} ref={ref} {...props}>
        {ratingArr}
      </ul>
    );
  },
);
