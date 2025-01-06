"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b px-4 pt-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex">
        <SignedOut>
          <SignInButton>Sign In </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex min-w-48 justify-between">
            <UploadButton
              className="me-4 mt-4"
              endpoint="imageUploader"
              onClientUploadComplete={() => router.refresh()}
            />
            <div className="min-w-8 self-center">
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
