"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
  return (
    <nav className="flex min-h-[69px] w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href={`/`}>
        <div>Gallery</div>
      </Link>

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
