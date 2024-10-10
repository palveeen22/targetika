import { FieldError } from 'react-hook-form';

type TProps = {
  error?: FieldError | { message: string } | undefined;
};

export const ErrorMessage = ({ error }: TProps) => {
  if (!error) return null;

  console.log(error);

  return (
    <p className="text-red-500 text-sm mt-1">
      {('message' in error) ? error.message : error.root?.message}
    </p>
  );
};