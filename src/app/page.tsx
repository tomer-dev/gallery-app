import { SignedIn, SignedOut } from "@clerk/nextjs";

import { CarnivalImages } from "./_components/CarnivalImages";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <CarnivalImages />
      </SignedIn>
    </main>
  );
}
