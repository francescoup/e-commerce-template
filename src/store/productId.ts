import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type idNumber = {
  ids: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
};

export const useIdStore = create<idNumber>()(
  persist(
    (set, get) => ({
      ids: [],
      addId: (id) =>
        set((state) => ({
          ids: state.ids.includes(id) ? state.ids : [...state.ids, id],
        })),
      removeId: (id) =>
        set((state) => ({
          ids: state.ids.filter((i) => i !== id),
        })),
    }),
    {
      name: "id-storage",
    }
  )
);
