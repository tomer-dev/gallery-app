import Link from "next/link";

import { Modal } from "./modal";
import FullPageImageView from "~/app/_components/components/full-image-page";
import CloseIcon from "~/app/_components/svg/close-icon";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  // @eslint-ignore-next-line
  const { id } = await params;

  const idAsNumber = Number(id);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
      <Link
        href="/"
        className="absolute left-4 top-3 rounded-xl bg-black/90 p-2"
      >
        <CloseIcon />
      </Link>
    </Modal>
  );
}
