import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buttons",
};

export default function Page() {
  return (
    <span className="h-screen place-items-center grid">
      <a
        href="https://learning.atheros.ai"
        className="cursor-pointer font-semibold relative uppercase flex justify-center transition-all duration-1000 ease-in max-w-[160px] w-full tracking-[.3rem] text-base leading-10 hover:text-orange-400 group"
      >
        <svg className="h-10 left-0 top-0 absolute w-full">
          <rect
            x="0"
            y="0"
            fill="none"
            width="100%"
            height="100%"
            className="stroke-white group-hover:stroke-orange-400 [stroke-dasharray:450,0] group-hover:[stroke-dasharray:20,300] transition-all duration-500 ease-linear [stroke-width:2] group-hover:[stroke-width:5] group-hover:duration-[2000] ease-[cubic-bezier(0.22, 1, 0.25, 1)] group-hover:[stroke-dashoffset:48]"
          />
        </svg>
        Learn
      </a>
    </span>
  );
}
