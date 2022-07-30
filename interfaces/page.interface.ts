export interface PageAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface PageBlog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface DataHH {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

export interface Learningclub {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

export interface PageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: number;
  advantages: PageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: DataHH;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: PageBlog;
  sravnikus: Learningclub;
  learningclub: Learningclub;
}
