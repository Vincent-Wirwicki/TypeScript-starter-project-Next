import { GetCharactersData } from "../../../types/types";

export default async function handler(
  req: any,
  res: GetCharactersData
): Promise<void> {
  const getData = await fetch("https://thronesapi.com/api/v2/Characters");
  const data: GetCharactersData = await getData.json();
  data.length > 0
    ? res.status(200).json(data)
    : res.status(404).json({ message: "Content not found" });
}
