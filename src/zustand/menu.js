import { create } from "zustand";

export const useMenuStore = create((set) => ({
  collapse: true,
  toggleCollapse: () =>
    set((state) => ({
      collapse: !state.collapse
    })),
}));
