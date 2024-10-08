"use client"

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
import Spinner from "../icons/spinner";

interface FormButtonProps {
  text: string;
}

const FormButton = ({ text }: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="text-white w-full
       bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <span>{!pending && text}</span>
      {pending && <Spinner />}
    </Button>
  );
};

export default FormButton;
