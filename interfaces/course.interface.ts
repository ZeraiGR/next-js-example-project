export interface CourseBlog {
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

export interface CourseCharacteristic {
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

export interface CourseModel {
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
  characteristics: CourseCharacteristic[];
  advantages?: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: CourseBlog;
  companyId: string;
  clicks: number;
  reviews: ReviewModel[];
  reviewCount: number;
  reviewAvg: number;
}
