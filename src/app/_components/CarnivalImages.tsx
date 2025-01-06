import Image from "next/image";
import { getMyCarnivalImages } from "~/server/db/queries";

export async function CarnivalImages() {
  const images = await getMyCarnivalImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex h-48 w-48 flex-col items-center justify-center"
        >
          <Image
            src={image.url}
            alt={image.name}
            width={192}
            height={192}
            style={{ objectFit: "fill" }}
          />
          <div className="mx-auto">{image.name}</div>
        </div>
      ))}
    </div>
  );
}
