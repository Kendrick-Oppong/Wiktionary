import { useKeyWord } from "../../hooks/useKeyWord";
import play from "../../assets/images/icon-play.svg";
import link from "../../assets/images/icon-new-window.svg";
import { v4 as uuidv4 } from "uuid";
import { useSearchTerm } from "../../context/SearchContext";
import { Loader } from "../loader";
import { ErrorMessage } from "../error";
import toast from "react-hot-toast";

export const Word = () => {
  const { searchTerm } = useSearchTerm();
  const { isLoading, error, data } = useKeyWord(searchTerm);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  const handlePlaySound = async () => {
    const audioUrl =
      (data && data[0]?.phonetics[0]?.audio) ||
      (data && data[0]?.phonetics[1]?.audio);
    const audio = new Audio(audioUrl);
    if (!audioUrl) toast.error("Audio file not found");
    console.log(audioUrl);
    return audio.play();
  };

  return (
    <main>
      <div className="flex justify-between py-6 border-b-4 rounded-lg border-slate-400">
        <div>
          <h1 className="text-5xl font-bold my-4" key={uuidv4()}>
            {data && data[0].word}
          </h1>

          {data &&
            data[0].phonetics.map((phonetic) => (
              <h2
                className="italic text-lg font-semibold text-slate-700 dark:text-gray-100"
                key={uuidv4()}
              >
                {phonetic.text}
              </h2>
            ))}
        </div>
        <div
          tabIndex={0}
          className="my-auto"
          onClick={handlePlaySound}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handlePlaySound();
            }
          }}
        >
          <img
            src={play}
            alt="play"
            className="cursor-pointer dark:contrast-200"
          />
        </div>
      </div>

      {data?.map((word) =>
        word.meanings.map((meaning) => (
          <>
            <div
              className="py-6 border-b-4  rounded-lg border-slate-400"
              key={uuidv4()}
            >
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
                    <h4 className="ml-6 italic font-bold">
                      {definition.example && `Example - ${definition.example}`}
                    </h4>
                  </>
                ))}
              </ul>
            </div>
            <ul className="py-6 ">
              {meaning.synonyms.length > 0 ? (
                <div className="border-b-4 pb-6  rounded-lg border-slate-400">
                  <h3 className="opacity-70">Synonyms</h3>

                  {meaning.synonyms.map((synonym) => (
                    <li
                      className="ml-10 my-3 text-lg font-semibold text-slate-700 dark:text-gray-100"
                      key={synonym}
                    >
                      {synonym}
                    </li>
                  ))}
                </div>
              ) : null}

              {meaning.antonyms.length > 0 ? (
                <>
                  <h3 className="opacity-70 mt-6">Antonyms</h3>
                  {meaning.antonyms.map((antonym) => (
                    <li
                      key={antonym}
                      className="ml-10 my-3 text-lg font-semibold text-slate-700 dark:text-gray-100"
                    >
                      {antonym}
                    </li>
                  ))}
                </>
              ) : null}
            </ul>
          </>
        ))
      )}
      <div className="border-b-4 pb-6  rounded-lg border-slate-400">
        <h1 className="opacity-70"> Source Urls</h1>
        {data?.map((word) =>
          word.sourceUrls.map((urls) => (
            <li className="ml-5 text-lg font-semibold" key={urls}>
              <a href={urls} target="_blank" className="text-blue-800">
                {urls} <img src={link} alt="" className="inline ml-1 mb-1" />
              </a>
            </li>
          ))
        )}
      </div>
    </main>
  );
};
