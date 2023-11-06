import toast from "react-hot-toast";
import { ErrorType } from "../../types/errorType";

export const ErrorMessage = ({ error: { response } }: ErrorType) => {
   toast.error("No definition found");
  return (
    <div className="rounded-lg bg-slate-100 dark:bg-[#121212] p-10 pb-20">
      <h1 className="text-red-700 text-center text-xl mt-8 mb-2">
        {`${response?.data.title}`}
      </h1>
      <h1 className="text-red-700 text-center text-xl">
        An error has occurred: {`${response?.data.message}`}
      </h1>
    </div>
  );
};
