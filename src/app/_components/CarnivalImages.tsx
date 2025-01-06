import { getMyCarnivalImages } from "~/server/db/queries";

export async function CarnivalImages() {
  const images = await getMyCarnivalImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} className="h-32 w-48" />
          <div className="mx-auto">{image.name}</div>
        </div>
      ))}
    </div>
  );
}
