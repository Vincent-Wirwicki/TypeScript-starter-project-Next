export interface GetCharactersData {
  length: number;
  status: any;
  results: Character[];
}

export interface Character {
  status: any;
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}
