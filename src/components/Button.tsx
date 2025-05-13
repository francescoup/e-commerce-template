"use client";

import React, { useState } from "react";
import { useIdStore } from "../store/productId";
type propsButton = {
  testId: number;
};
const Button = ({ testId }: propsButton) => {
  const ids = useIdStore((state) => state.ids);
  const addId = useIdStore((state) => state.addId);

  console.log(ids);
  return (
    <button
      className="absolute bottom-20 right-3 z-10 bg-amber-400 p-3 rounded-xl"
      onClick={() => addId(testId)}
    >
      Add to cart
    </button>
  );
};

export default Button;
