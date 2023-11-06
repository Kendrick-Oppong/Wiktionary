export type ErrorType = {
  error: {
    response?:
      | {
          data: {
            message: string;
            title: string;
          };
        }
      | undefined;
    message: string; 
  };
};
