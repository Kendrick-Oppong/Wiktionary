import { useKeyWord } from "../../hooks/useKeyWord";

export const Word = () => {
  const { isLoading, error, data } = useKeyWord();
  if (isLoading) return "Loading...";
  console.log(data);
  if (error) return "An error has occurred: " + error.message;

  return (
    <main>
      <div className="flex justify-between py-6 border-b-4 rounded-lg border-slate-400">
        <div>
          {data?.map((word) => (
            <h1 className="text-5xl font-bold my-4">{word.word}</h1>
          ))}

          {data?.map((word) =>
            word.phonetics.map((phonetic) => (
              <h2 className="italic text-lg font-semibold text-slate-700">
                {phonetic.text}
              </h2>
            ))
          )}
        </div>
        <div>hdhbdj</div>
      </div>

      {data?.map((word) =>
        word.meanings.map((meaning) => (
          <>
            <div className="py-6 border-b-4  rounded-lg border-slate-400">
              <h1 className="text-3xl font-bold italic">
                {meaning.partOfSpeech}
              </h1>
              <ul className="my-3">
                <h3 className="opacity-70">Meaning</h3>
                {meaning.definitions.map((definition) => (
                  <>
                    <li className="ml-10 my-3 text-lg font-semibold">
                      {definition.definition}
                    </li>
                    <h4>{definition.example}</h4>
                  </>
                ))}
              </ul>
            </div>
            <ul className="py-6 border-b-4  rounded-lg border-slate-400">
              <h3 className="opacity-70">Synonyms</h3>
              <>
                {meaning.synonyms.map((synonym) => (
                  <li className="ml-10 my-3 text-lg font-semibold">
                    {synonym}
                  </li>
                ))}
              </>

              <h3 className="opacity-70">
                Antonyms
                {meaning.antonyms.map((antonym) => (
                  <li>{antonym}</li>
                ))}
              </h3>
            </ul>
          </>
        ))
      )}
      <div>
        {data?.map((word) =>
          word.sourceUrls.map((urls) => (
            <h1 className="text-lg font-semibold">
              <a href={urls}>{urls}</a>
            </h1>
          ))
        )}
      </div>
    </main>
  );
};
