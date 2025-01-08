import { SignedIn, SignedOut } from "@clerk/nextjs";

import { CarnivalImages } from "./_components/CarnivalImages";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <SignedOut>
        <div className="text-2x1 h-full w-full text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <CarnivalImages />
      </SignedIn>
    </div>
  );
}
