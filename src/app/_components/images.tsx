import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

export default async function Images() {
  const images = await getMyImages();

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
