import { SignedIn, SignedOut } from "@clerk/nextjs";

import Images from "./_components/images";
import Welcome from "./_components/components/welcome-page";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex h-full w-full justify-center">
      <SignedOut>
        <div className="flex h-full w-full flex-col justify-between pt-4 text-center text-2xl">
          Please sign in above
          <Welcome />
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex max-w-screen-lg flex-wrap content-start justify-center gap-4 p-4">
          <Images />
        </div>
      </SignedIn>
    </div>
  );
}
