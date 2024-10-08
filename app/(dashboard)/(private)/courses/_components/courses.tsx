import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Database } from "@/types/supabase";

interface CoursesListProps {
  lessons: Database["public"]["Tables"]["lessons"]["Row"][];
}
export default function CoursesList({ lessons }: CoursesListProps) {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          {lessons.map((lesson) => {
            return (
              <>
                <AccordionTrigger>{lesson.title}</AccordionTrigger>
                <AccordionContent>
                  {lesson.description}
                  {lesson.video_id && (
                    <video width={600} height={300}>
                        <source src="" />
                    </video>
                  )}
                </AccordionContent>
              </>
            );
          })}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
