import React from "react";
import { Images } from "@/lib/photo";
import Image from "next/image";

const PhotoDetail = ({ params: { id } }: { params: { id: string } }) => {
  const photo = Images.find((p) => p.id === id)!;

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <h1 className="text-center text-2xl font-bold my-4 px-4">
            {photo.name}
          </h1>
          <Image
            alt={photo.name}
            src={photo.src}
            className="w-full object-cover aspect-square"
            width={600}
            height={600}
          />
          <div className="bg-gray-50 py-4 px-4">
            <h3 className="text-center text-gray-700">{photo.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
