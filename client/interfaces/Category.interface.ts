export interface ICategoryAttributes {
  Name: string;
  __typename: string;
}

export interface ICategory {
  id: number;
  __typename: string;
  attributes: ICategoryAttributes;
}

export interface ICategoryData {
  data: ICategory[];
}
