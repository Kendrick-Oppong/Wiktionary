import { useQuery } from "@tanstack/react-query";
import { Word } from "../types/apiType";

export const useKeyWord = () => {
  return useQuery<Word[], Error>({
    queryKey: ["word"],
    queryFn: () =>
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + "daddy").then(
        (res) => res.json()
      ),
  });
};
