import Image from "next/image";
import Link from "next/link";
import { getMyCarnivalImages } from "~/server/db/queries";

export async function CarnivalImages() {
  const images = await getMyCarnivalImages();

  return images.map((image) => (
    <div
      key={image.id}
      className="flex h-48 w-48 flex-col items-center justify-center"
    >
      <Link href={`/img/${image.id}`}>
        <Image
          src={image.url}
          alt={image.name}
          width={192}
          height={192}
          style={{ objectFit: "fill" }}
        />
      </Link>
      <div className="mx-auto">{image.name}</div>
    </div>
  ));
}
