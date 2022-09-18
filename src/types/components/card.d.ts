export = Card;
export as namespace Card;

declare namespace Card {
  interface ProjectCardInterface {
    id: string;
    imageURL: string;
    title: string;
    url: string;
    createdAt?: Date;
  }
}

export default Card;
