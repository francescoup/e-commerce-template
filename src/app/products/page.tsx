import Image from "next/image";
import Link from "next/link";
import Product from "@/components/Product";
import { Products as ProductType } from "@/types/products";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product: ProductType[] = await res.json();
  if (!res.ok) {
    return <p>'There was an error.'</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-8 gap-4">
      {product?.map((p) => {
        return <Product key={p.id} {...p} />;
      })}
    </div>
  );
}
