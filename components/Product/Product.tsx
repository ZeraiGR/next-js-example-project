import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { ProductProps } from './Product.props';
import styles from './Product.module.scss';
import { Card } from '../Card/Card';
import { priceRu } from '../../utils/format-numbers';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { Button } from '../Button/Button';
import { declOfNum } from '../../utils/declination-of-numbers';
import { Review } from '../Review/Review';
import { Divider } from '../Divider/Divider';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';
import { smoothScroll } from '../../utils/smooth-scroll';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  const {
    _id,
    title,
    image,
    price,
    oldPrice,
    credit,
    reviewAvg,
    initialRating,
    categories,
    description,
    characteristics,
    tags,
    advantages,
    disadvantages,
    reviewcount,
    reviews,
  } = product;
  const [isShowReviews, setIsShowReviews] = React.useState<boolean>(false);
  const reviewRef = React.useRef<HTMLDivElement>(null);

  const discount = price && oldPrice ? Math.round((price - oldPrice) / 1000) * 1000 : null;

  const scrollToReview = () => {
    setIsShowReviews(true);
    setTimeout(() => {
      smoothScroll(reviewRef.current, { block: 'start' }).then(() => {
        reviewRef.current?.focus();
      });
    }, 0);
  };

  const variants = {
    hidden: { height: 0 },
    show: { height: 'auto' },
  };

  return (
    <article className={cn(className, styles.product)} {...props}>
      <Card className={styles.grid}>
        <div className={styles.schoollogo}>
          <img
            src={process.env.NEXT_PUBLIC_DOMAIN + image}
            alt={'School logo'}
            width={70}
            height={70}
          />
        </div>

        <div className={styles.title}>{title}</div>

        <div className={styles.price}>
          <div className={styles.currentPrice}>
            <span className="sr-only">Цена:</span>
            {product.price ? priceRu(product.price) : 'Цена не указана'}
          </div>
          {discount && (
            <Tag className={styles.discount} size="small" appearance="green">
              <span className="sr-only">Скидка:</span>
              {priceRu(discount)}
            </Tag>
          )}
        </div>

        <div className={styles.credit}>
          <span className="sr-only">Кредит:</span>
          {price ? (
            <>
              {priceRu(credit)}
              <span>/мес</span>
            </>
          ) : (
            'Цена не указана'
          )}
        </div>

        <div className={styles.rating}>
          <span className="sr-only">{`Рейтинг: ${reviewAvg ?? initialRating}`}</span>
          <Rating rating={reviewAvg ?? initialRating} />
        </div>

        <ul className={styles.tags}>
          {categories &&
            categories.map((c) => (
              <li key={c}>
                <Tag size="small" appearance="ghost">
                  {c}
                </Tag>
              </li>
            ))}
        </ul>

        <div className={styles.pricedescr} aria-hidden={true}>
          цена
        </div>

        <div className={styles.creditdescr} aria-hidden={true}>
          в кредит
        </div>

        <div className={styles.reviewcount}>
          <a href="#ref" onClick={scrollToReview}>
            {reviewcount} {declOfNum(reviewcount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>

        <Divider className={styles.headerdivider} />

        <div className={styles.description}>{description}</div>

        <div className={styles.characteristics}>
          {characteristics && (
            <ul className={styles.charlist}>
              {characteristics.map((char) => (
                <li className={styles.char} key={char.name}>
                  <strong>{char.name}</strong>
                  <div className={styles.dots}></div>
                  <span>{char.value}</span>
                </li>
              ))}
            </ul>
          )}
          {tags && (
            <ul className={styles.previlegies}>
              {tags.map((t) => (
                <li key={t}>
                  <Tag size="small" appearance="ghost">
                    {t}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.reviews}>
          {advantages && (
            <div className={styles.advantages}>
              <strong>Преимущества</strong>
              <p>{advantages}</p>
            </div>
          )}

          {disadvantages && (
            <div className={styles.advantages}>
              <strong>Недостатки</strong>
              <p>{disadvantages}</p>
            </div>
          )}
        </div>

        <Divider className={styles.btnsdivider} />

        <ul className={styles.buttons}>
          <li>
            <Button appearance="primary">Узнать подробнее</Button>
          </li>
          <li>
            <Button
              onClick={() => setIsShowReviews(!isShowReviews)}
              appearance="ghost"
              arrow={isShowReviews ? 'down' : 'right'}
              aria-expanded={isShowReviews}>
              Читать отзывы
            </Button>
          </li>
        </ul>
      </Card>
      <motion.div
        className={cn(styles.revwrap, { [styles.opened]: isShowReviews })}
        variants={variants}
        animate={isShowReviews ? 'show' : 'hidden'}
        initial={isShowReviews ? 'show' : 'hidden'}>
        <Card
          className={cn(styles.reviews)}
          appearance="gray"
          ref={reviewRef}
          tabIndex={isShowReviews ? 0 : -1}>
          {reviews && (
            <div className={styles.revlist}>
              {reviews.map((r) => (
                <React.Fragment key={r._id}>
                  <Review review={r} />
                  <Divider />
                </React.Fragment>
              ))}
            </div>
          )}
          <ReviewForm productid={_id} isOpened={isShowReviews} />
        </Card>
      </motion.div>
    </article>
  );
};
