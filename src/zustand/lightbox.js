import { create } from "zustand";

export const useLightboxStore = create((set) => ({
  lightboxActive: false,
  toggleLightboxActive: () =>
    set((state) => ({
      lightboxActive: !state.lightboxActive,
    })),
}));
