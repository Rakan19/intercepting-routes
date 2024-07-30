import { StaticImageData } from "next/image";
import photo1 from "@/components/photos/Exploring the Exciting New Features of Next_js 14.jpeg";
import photo2 from "@/components/photos/How React JS Developer Can Help Your Business.jpeg";
import photo3 from "@/components/photos/In 2023, How Much Does It Cost To Build A Nodе_js Wеb App_.jpeg";
import photo4 from "@/components/photos/最短・最速で学ぶ Tailwind CSS _udemy Web Development course.jpeg";
import photo5 from "@/components/photos/f.jpeg";
import photo6 from "@/components/photos/window_requestAnimationFrame().jpeg";

export type Image = {
  id: string;
  name: string;
  src: StaticImageData;
  description: string;
};

export const Images: Image[] = [
  {
    id: "1",
    name: "photo 1",
    src: photo1,
    description: "Next Js",
  },
  {
    id: "2",
    name: "photo 2",
    src: photo2,
    description: "Backend developer",
  },
  {
    id: "3",
    name: "photo 3",
    src: photo3,
    description: "Frontend developer",
  },
  {
    id: "4",
    name: "photo 4",
    src: photo4,
    description: "Tailwind css",
  },
  {
    id: "5",
    name: "photo 5",
    src: photo5,
    description: "React",
  },
  {
    id: "6",
    name: "photo 6",
    src: photo6,
    description: "JavaScript",
  },
];
