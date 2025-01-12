import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

export default async function Images() {
  const images = await getMyImages();

  return images.map((image) => (
    <Link
      href={`/img/${image.id}`}
      key={image.id}
      draggable={false}
      className="flex h-40 w-48 flex-col items-center justify-center"
    >
      <Image
        src={image.url}
        alt={image.name}
        width={192}
        height={120}
        objectFit="cover"
        style={{ height: "120px", maxHeight: "120px", objectFit: "cover" }}
      />

      <div className="mt-1 w-full truncate text-center">{image.name}</div>
    </Link>
  ));
}
