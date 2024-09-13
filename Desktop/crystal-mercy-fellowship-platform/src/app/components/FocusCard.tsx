import Image from 'next/image'

export function ResizableDemo({
  image,
  title,
  content,
  bibleVerse
}: {
  image: string
  title: string
  content: string
  bibleVerse: string
}) {
  return (
    <div data-aos="zoom-in" className="border rounded-xl p-5 flex flex-col md:flex-row w-[700px] bg-gray-50">
      <div className="flex flex-col items-center md:items-start md:w-1/3 p-4">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={image}
            alt="Landing page background"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
        <h2 className="text-xl font-semibold text-center md:text-left">{title}</h2>
      </div>
      <div className="flex-1 p-4">
        <p className="mb-4">{content}</p>
        <blockquote className="p-5 border-l-4 border-gray-300 bg-gray-100 italic h-[150px] flex items-center">
          {bibleVerse}
        </blockquote>
      </div>
    </div>
  );
}
