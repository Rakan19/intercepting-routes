"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Images } from "@/lib/photo";
import Modal from "@/components/modal";

const ModalDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const router = useRouter();
  const photo = Images.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        width={800}
        height={600}
        className="object-cover rounded-lg"
      />
    </Modal>
  );
};

export default ModalDetailPage;
