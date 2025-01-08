import FullPageImageView from "~/app/_components/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  // @eslint-ignore-next-line
  const { id } = await params;

  const idAsNumber = Number(id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return <FullPageImageView id={idAsNumber} />;
}
