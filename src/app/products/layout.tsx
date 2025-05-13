import { propsLayout } from "@/types/propsLayout";

export default function productLayout({ children }: propsLayout) {
  return (
    <div className="bg-red-800 grid grid-cols-4">
      <div className="col-span-1 bg-white">sidebar</div>
      <div className="col-span-3">{children}</div>
    </div>
  );
}
