import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { Products as ProductProps } from "@/types/products";

export default function Product({ id, image, title }: ProductProps) {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm relative overflow-hidden h-[400px]">
        <Link href={`/products/${id}`}>
          <Image
            className="hover:scale-110 transition-transform"
            fill
            src={image}
            alt="Picture of the author"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />

          <div className="absolute bottom-3 right-3 bg-amber-400 p-3 rounded-xl">
            {title.substring(0, 20)}
          </div>
        </Link>
        <Button testId={id} />
      </div>
    </>
  );
}
