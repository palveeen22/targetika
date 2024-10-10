import { FieldError } from "react-hook-form";

type TProps = {
    error: FieldError | undefined 
}

export const ErrorMessage  = ({ error }:TProps) => {
    if (!error) return null;
    return <p className="text-red-500">{error.message}</p>;
  };