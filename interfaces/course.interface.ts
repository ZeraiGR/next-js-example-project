export interface ProductBlog {
  text: string;
  _id: string;
  bigImage?: string;
}

export enum Name {
  Длительность = 'Длительность',
  ДокументОбОкончании = 'Документ об окончании',
  Сложность = 'Сложность',
  Школа = 'Школа',
}

export interface ProductCharacteristic {
  name: Name;
  value: string;
}

export interface ReviewModel {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: Date;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: ProductCharacteristic[];
  advantages?: string;
  disadvantages?: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: ProductBlog;
  companyId: string;
  clicks: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg: number;
}
