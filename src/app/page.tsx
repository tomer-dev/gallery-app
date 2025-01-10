import { SignedIn, SignedOut } from "@clerk/nextjs";

import { CarnivalImages } from "./_components/CarnivalImages";
import Welcome from "../markdown/Welcome.mdx";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <SignedOut>
        <div className="flex h-full w-full flex-col justify-between pt-4 text-center text-2xl">
          Please sign in above
          <Welcome />
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex max-w-screen-lg flex-wrap justify-center gap-4 p-4">
          <CarnivalImages />
        </div>
      </SignedIn>
    </>
  );
}
