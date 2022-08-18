export type CardTitle = string;
export type CardID = string;

export type Card = {
  id: CardID;
  front: string;
  title: CardTitle;
};

export type CardsList = Array<Card>;
