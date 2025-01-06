"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex h-20 w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex">
        <SignedOut>
          <SignInButton>Sign In </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex min-w-48 justify-between">
            <UploadButton
              className="-mb-4 me-4 text-lg"
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            />
            <div className="ms-auto min-w-7 self-center">
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
