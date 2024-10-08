import React from "react";
import CoursesList from "./_components/courses";
import { createClient } from "@/utils/supabase/client";

export default async function CoursesPage() {

  const supabaseClient = createClient();
  const {data,error} = await supabaseClient.from("lessons").select();
  console.log(data);
  if(error){
    console.log("Error:" + error);
  }

  return (
    <div className="bg-gray-100 mx-auto flex flex-col gap-10 pb-10">
      <h1 className="mx-auto text-center text-2xl mt-10 text-black">Lezioni</h1>
      <div className="max-w-xl mx-auto px-10 w-full">
        <CoursesList />
      </div>
    </div>
  );
}
