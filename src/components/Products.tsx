import Image from "next/image";
import { useIdStore } from "@/store/productId";
import { Products as ProductProps } from "@/types/products";
const Products = ({
  id,
  title,
  description,
  image,
  rating,
  price,
}: ProductProps) => {
  const removeId = useIdStore((state) => state.removeId);
  return (
    <div>
      <div className="flex gap-12  h-52 overflow-hidden items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image
          src={image}
          className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          width={800}
          height={800}
          alt=""
        />
        <div className="w-full p-4">
          <div className="flex justify-between leading-normal w-full gap-4">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <h6 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              $ {price}
            </h6>
          </div>
          <button
            className="border p-3 rounded-lg"
            onClick={() => removeId(id)}
          >
            remove item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
