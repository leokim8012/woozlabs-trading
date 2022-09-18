export = Article;
export as namespace Article;

declare namespace Article {
  interface ArticleBaseInterface {
    id: string;
    category: string;
    imageUrl: string;
    filePath: string;
    author: string;
    title: string;
    subtitle: string;
    views: number;
    articleId: string;
    recommend?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
}

export default Article;
