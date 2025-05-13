"use client";

import React, { useEffect, useState } from "react";
import { useIdStore } from "@/store/productId";
import Products from "./Products";
import { Products as arrayProduct } from "@/types/products";

const Cart = () => {
  const ids = useIdStore((state) => state.ids);
  const [item, setItem] = useState<arrayProduct[]>([]);

  useEffect(() => {
    async function addToCart() {
      const response = await Promise.all(
        ids.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
            return res.json();
          })
        )
      );
      setItem(response);
    }
    addToCart();
  }, [ids]);
  return (
    <div className="grid grid-cols-1 gap-2">
      {item.map((i) => {
        return <Products key={i.id} {...i} />;
      })}
    </div>
  );
};

export default Cart;
