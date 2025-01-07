import Image from "next/image";

import { getImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return <Image src={image.url} width={256} height={256} alt={image.name} />;
}
