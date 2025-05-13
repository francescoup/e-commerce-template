"use client";
import Link from "next/link";
import { useState } from "react";
import { useIdStore } from "@/store/productId";

export default function NavBar() {
  const ids = useIdStore((s) => s.ids);
  const [isOpen, setIsOpen] = useState(false);
  const menuLink = [
    {
      nome: "home",
      link: "/",
    },
    {
      nome: "products",
      link: "/products",
    },
    {
      nome: "contact",
      link: "/contact",
    },
    {
      nome: "about",
      link: "/about",
    },
    {
      nome: "user",
      link: "/user",
    },
    {
      nome: "cart",
      link: "/cart",
      item: ids,
    },
  ];
  return (
    <>
      <nav className="w-full h-14 hidden lg:flex justify-end gap-4 items-center">
        {...menuLink.map((m, i) => {
          return (
            <Link
              className="rounded-4xl font-semibold bg-amber-400 px-8 py-3 hover:text-amber-800/50 text-amber-950 transition-all"
              key={m.nome}
              href={m.link}
            >
              {m.nome} {m.item?.length}
            </Link>
          );
        })}
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-red-600 flex md:hidden"
      >
        open
      </button>
      {isOpen && (
        <div className="min-h-screen lg:hidden w-screen fixed top-0 left-0 z-10 bg-amber-950">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-red-600 flex md:hidden"
          >
            close
          </button>
          <nav className="w-full min-h-screen flex flex-col justify-center gap-4 items-center">
            {...menuLink.map((m, i) => {
              return (
                <Link
                  className="rounded-4xl font-semibold bg-amber-400 px-8 py-3 hover:text-amber-800/50 text-amber-950 transition-all"
                  key={m.nome}
                  href={m.link}
                >
                  {m.nome}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
