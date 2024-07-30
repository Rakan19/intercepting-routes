import { Images } from "@/lib/photo";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Intercepting Routes</h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 mt-6">
        {Images.map(({ src, description, id, name }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform"
          >
            <Link href={`/photo/${id}`} passHref>
              <div className="relative w-full h-64">
                <Image
                  alt={name}
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              {description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
