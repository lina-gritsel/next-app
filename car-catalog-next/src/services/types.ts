export interface IBlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IBlogData{
    blogs: IBlog[]
}

export interface IBlogDataSingle{
    blog: IBlog
}