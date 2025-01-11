import { HTMLProps } from "react";
import Welcome from "~/markdown/welcome.mdx";

const overrideComponents = {
  h1: (props: HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="text-2xl font-semibold text-white drop-shadow-[1px_5px_5px_rgba(0,0,0,0.75)]"
      {...props}
    />
  ),
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <a className="text-lg font-semibold text-white" {...props} />
  ),

  ul: (props: HTMLProps<HTMLUListElement>) => (
    <ul
      className="prose inset-0 flex flex-col rounded-xl bg-white px-8 py-2 text-start shadow-xl"
      {...props}
    />
  ),
};

export default function Page() {
  return (
    <article className="prose wavy-background flex max-w-full flex-col items-center font-[monospace]">
      <Welcome components={overrideComponents} />
    </article>
  );
}
