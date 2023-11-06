import { useQuery } from "@tanstack/react-query";
import { Word } from "../types/apiType";
import axios from "axios";

export const useKeyWord = (query: string) => {
  return useQuery<Word[], Error>({
    queryKey: ["word", query],
    queryFn: () =>
      axios
        .get<Word[]>("https://api.dictionaryapi.dev/api/v2/entries/en/" + query)
        .then((res) => res.data),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
