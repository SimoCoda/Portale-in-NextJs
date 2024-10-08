"use server";

import { createClient } from "@/utils/supabase/supabase.server";


export type FormState = {
  message: string;
  error?: string;
};

export const registerAction = async (
  prevState: FormState,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  console.log(password, confirmPassword);
  if (!password || password !== confirmPassword) {
    return { message: "", error: "Password is different" };
  }

  const supabaseClient = createClient();
  console.log(supabaseClient)
  const {error} = await supabaseClient.auth.signUp({
    email,
    password,
  })

  if(error){
    return { message: "", error: error.message};
  }

  return { error: "", message: "Success, check your email" };
};
