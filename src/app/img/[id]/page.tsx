import Image from "next/image";

import { getImage } from "~/server/db/queries";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <Image src={image.url} width={256} height={256} alt={image.name} />
    </div>
  );
}
