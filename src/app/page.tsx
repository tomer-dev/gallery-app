import { SignedIn, SignedOut } from "@clerk/nextjs";

import { CarnivalImages } from "./_components/CarnivalImages";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex justify-center">
      <SignedOut>
        <div className="h-full w-full p-4 text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex max-w-screen-lg flex-wrap justify-center gap-4 p-4">
          <CarnivalImages />
        </div>
      </SignedIn>
    </div>
  );
}
