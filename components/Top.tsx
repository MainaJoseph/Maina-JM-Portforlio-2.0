import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function Top() {
  return (
    <div className="hidden md:block overflow-hidden dark:bg-black-100 bg-white w-full mt-[-200px]">
      <MacbookScroll
        title={
          <span className="text-center text-[40px] md:text-3xl lg:text-4xl">
            Be Ready To Be Blown Away. <br />{" "}
            <span className="text-purple">No kidding.</span>
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return <div>Hello</div>;
};

export default Top;
