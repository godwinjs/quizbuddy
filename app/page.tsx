import Image from "next/image";
import Quiz from "./assets/containers/quiz";

export default function Home() {
  return (
    <main className="min-h-screen items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Quiz questions for&nbsp;
          <code className="font-mono font-bold">Javascript</code>
        </p>
        <div className="group cursor-pointer  fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            Next {"  "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &gt;
            </span>
        </div>
      </div>
      <Quiz />
    </main>
  );
}
