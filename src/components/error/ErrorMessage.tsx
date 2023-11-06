import { ErrorType } from "../../types/errorType";

export const ErrorMessage = ({ error: { response } }: ErrorType) => {

  return (
    <>
      <h1 className="text-red-700 text-center text-xl mt-8 mb-2">
        {`${response?.data.title}`}
      </h1>
      <h1 className="text-red-700 text-center text-xl">
        An error has occurred: {`${response?.data.message}`}
      </h1>
    </>
  );
};
