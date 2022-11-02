import { Character, GetCharactersData } from "../../../types/types";

export default async function handler(
  { query: { id } }: any,
  res: Character
): Promise<void> {
  const getData = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
  const data = await getData.json();

  //   res.status(200).json(data);
  Object.keys(data).length > 0
    ? res.status(200).json(data)
    : res.status(404).json({ message: `this character doesn't exist ${id}` });
}
