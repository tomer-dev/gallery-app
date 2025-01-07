import Image from "next/image";

import { getImage } from "~/server/db/queries";

import { Modal } from "./modal";
import FullPageImageView from "~/app/_components/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const idAsNumber = Number(id);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
