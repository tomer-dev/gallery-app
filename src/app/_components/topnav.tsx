"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex">
        <SignedOut>
          <SignInButton>Sign In </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <SimpleUploadButton />
            <div className="min-w-7">
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
