import { Button } from "@/components/ui/button";
import Link from "next/link";


const hero = () => {
  return (
    <div>
      <div className="hero bg-lime-100 p-10 h-auto w-full">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button asChild>
                <Link href="/#pricing">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
