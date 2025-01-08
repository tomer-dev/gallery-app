import { clerkClient } from "@clerk/nextjs/server";

import { Button } from "~/components/ui/button";

import { deleteImage, getImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  console.log("found", image);

  const uploaderInfo = await clerkClient().then((client) =>
    client.users.getUser(image.userId),
  );

  return (
    <div className="flex h-full w-full min-w-full">
      <div className="flex flex-shrink basis-full items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(image.id);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
