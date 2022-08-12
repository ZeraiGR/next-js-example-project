import React, { ForwardedRef, KeyboardEvent } from 'react';
import cn from 'classnames';

import StarIcon from './star.svg';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';

export const Rating = React.forwardRef(
  (
    { rating, isEditable = false, setRating, className, ...props }: RatingProps,
    ref: ForwardedRef<HTMLUListElement>,
  ): JSX.Element => {
    const [ratingArr, setRatingArr] = React.useState<JSX.Element[]>(
      new Array(5)
        .fill(<></>)
        .map((el: JSX.Element, i: number) => <React.Fragment key={i}></React.Fragment>),
    );

    React.useEffect(() => {
      constructRating(rating);
    }, [rating]);

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

    const setRatingWithKey = (e: KeyboardEvent<SVGElement>, rating: number) => {
      if (e.code === 'Space' && isEditable && setRating != undefined) {
        setRating(rating);
      }
    };

    const constructRating = (currentRating: number) => {
      const handledRatingArr = ratingArr.map((r: JSX.Element, i: number) => (
        <li
          key={i}
          className={cn(styles.rate, { [styles.isEdit]: isEditable })}
          onMouseEnter={() => showRating(i + 1)}
          onMouseLeave={() => showRating(rating)}
          onClick={() => setRatingWithMouse(i + 1)}>
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
            })}
            onKeyPress={(e: KeyboardEvent<SVGElement>) => setRatingWithKey(e, i + 1)}
            tabIndex={isEditable ? 0 : -1}
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
