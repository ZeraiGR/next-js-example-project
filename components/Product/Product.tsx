import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { ProductProps } from './Product.props';
import styles from './Product.module.scss';
import { Card } from '../Card/Card';
import { Htag } from '../Htag/Htag';
import { priceRu } from '../../utils/format-numbers';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { Button } from '../Button/Button';
import { declOfNum } from '../../utils/declination-of-numbers';
import { Review } from '../Review/Review';
import { Divider } from '../Divider/Divider';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

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
    reviewCount,
    reviews,
  } = product;
  const [isShowReviews, setIsShowReviews] = React.useState<boolean>(false);
  const reviewRef = React.useRef<HTMLDivElement>(null);

  const discount = price && oldPrice ? Math.round((price - oldPrice) / 1000) * 1000 : null;

  const scrollToReview = async () => {
    await setIsShowReviews(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const variants = {
    hidden: { height: 0 },
    show: { height: 'auto' },
  };

  return (
    <article className={cn(className, styles.product)} {...props}>
      <Card className={styles.grid}>
        <div className={styles.schoolLogo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + image}
            alt={'School logo'}
            width={70}
            height={70}
          />
        </div>

        <Htag className={styles.title} tag="h3">
          {title}
        </Htag>

        <div className={styles.price}>
          <div className={styles.currentPrice}>
            {product.price ? priceRu(product.price) : 'Цена не указана'}
          </div>
          {discount && (
            <Tag className={styles.discount} size="small" appearance="green">
              {priceRu(discount)}
            </Tag>
          )}
        </div>

        <div className={styles.credit}>
          {price ? (
            <>
              {priceRu(credit)}
              <span>/мес</span>
            </>
          ) : (
            'Цена не указана'
          )}
        </div>

        <Rating className={styles.rating} rating={reviewAvg ? reviewAvg : initialRating} />

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

        <div className={styles.priceDescr}>цена</div>

        <div className={styles.creditDescr}>в кредит</div>

        <div className={styles.reviewCount}>
          <a href="#ref" onClick={scrollToReview}>
            {reviewCount} {declOfNum(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>

        <Divider className={styles.headerDivider} />

        <div className={styles.description}>{description}</div>

        <div className={styles.characteristics}>
          {characteristics && (
            <ul className={styles.charList}>
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

        <Divider className={styles.btnsDivider} />

        <ul className={styles.buttons}>
          <li>
            <Button appearance="primary">Узнать подробнее</Button>
          </li>
          <li>
            <Button
              onClick={() => setIsShowReviews(!isShowReviews)}
              appearance="ghost"
              arrow={isShowReviews ? 'down' : 'right'}>
              Читать отзывы
            </Button>
          </li>
        </ul>
      </Card>
      <motion.div
        className={styles.revwrap}
        variants={variants}
        animate={isShowReviews ? 'show' : 'hidden'}
        initial={isShowReviews ? 'show' : 'hidden'}>
        <Card className={cn(styles.reviews)} appearance="gray" ref={reviewRef}>
          {reviews && (
            <ul className={styles.revlist}>
              {reviews.map((r) => (
                <React.Fragment key={r._id}>
                  <Review review={r} />
                  <Divider />
                </React.Fragment>
              ))}
            </ul>
          )}
          <ReviewForm productid={_id} />
        </Card>
      </motion.div>
    </article>
  );
};
