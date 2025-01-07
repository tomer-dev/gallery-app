import "server-only";

import { auth } from "@clerk/nextjs/server";

import { db } from ".";

export async function getMyCarnivalImages() {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    where: (model, { eq }) => eq(model.userId, user.userId),
  });

  return images;
}

export async function getImage(id: number) {
  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (module, { eq, and }) =>
      and(eq(module.id, id), eq(module.userId, user.userId)),
  });

  if (!image) throw new Error("Image not found");

  return image;
}
