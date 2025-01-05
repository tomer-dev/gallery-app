import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/O7TbaRB4D0JoULwyshhqD71nvkBSOKaZJq5pbt9gWNy8sdeY",
  "https://utfs.io/f/O7TbaRB4D0JoXHhWQ9RJ26aR4jvI8NfyrQo0ACnxdMSbEU3B",
  "https://utfs.io/f/O7TbaRB4D0Jo5w8oj107zu4TMhjpfr2XgmSRCNWV9ne0UkIy",
  "https://utfs.io/f/O7TbaRB4D0Jo4eXqONry9oMn76mqFZvsQByPxieDAkYRzfX5",
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls].map(
  (url, index) => ({
    id: index + 1,
    url,
  }),
);

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} className="max-h-32 w-48 object-contain" />
          </div>
        ))}
      </div>
    </main>
  );
}
