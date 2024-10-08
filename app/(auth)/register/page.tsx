"use client"

import React, { useState } from "react";
import { FormState, registerAction } from "./action";
import { useFormState } from "react-dom";
import FormButton from "@/components/ui/form-button";

const initialState: FormState = {
  message: "",
};

const Register = () => {

  const [state, formAction] = useFormState(registerAction, initialState)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="px-auto py-10">
      <h1 className="text-white text-2xl text-center">Registrati</h1>
      <form className="max-w-sm mx-auto" action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat password
          </label>
          <input
            name="confirm-password"
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-white dark:text-gray-300"
          >
            I agree with the{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline dark:text-blue-500"
              onClick={handleModalToggle}
            >
              terms and conditions
            </button>
          </label>
        </div>
        <FormButton text="Register" />
        <div className="text-green-600">{state.message}</div>
        <div className="text-red-700">{state.error}</div>
      </form>

      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-gray-200">
            <h3 className="font-bold text-lg">Terms and Conditions</h3>
            <p className="py-4">
              Please read and accept the terms and conditions to continue.
            </p>
            <div className="modal-action">
              <button className="btn text-white" onClick={handleModalToggle}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Register;
