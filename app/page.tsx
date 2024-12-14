import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        <b className="text-primary">e</b>ssenceUI
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        A simple open-source component library for documenting my creations!
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/components${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Explore Components
        </Link>
      </div>
    </div>
  );
}