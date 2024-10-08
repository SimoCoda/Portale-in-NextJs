import React from "react";
import CoursesList from "./_components/courses";
import { createClient } from "@/utils/supabase/client";

export default async function CoursesPage() {
  const supabaseClient = createClient();
  const {data} = await supabaseClient.from("lessons").select();
  console.log(data);

  if(!data){
    return <div>Non ci sono lezioni!</div>
  }

  return (
    <div className="bg-gray-100 mx-auto flex flex-col gap-10 pb-10">
      <h1 className="mx-auto text-center text-2xl mt-10 text-black">Lezioni</h1>
      <div className="max-w-xl mx-auto px-10 w-full">
        <CoursesList lessons={data} />
      </div>
    </div>
  );
}
