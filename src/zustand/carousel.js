import { create } from "zustand";

const checkNextImage = (imageState) => {
  if (imageState < 3) {
    return (imageState += 1);
  } else if (imageState === 3) {
    return 0;
  } else {
    return imageState;
  }
};

const checkPrevImage = (imageState) => {
  if (imageState > 0) {
    return (imageState -= 1);
  } else if (imageState === 0) {
    return 3;
  } else {
    return imageState;
  }
};

export const useCarouselStore = create((set) => ({
  image: 0,
  nextImage: () =>
    set((state) => ({
      image: checkNextImage(state.image),
    })),
  prevImage: () =>
    set((state) => ({
      image: checkPrevImage(state.image),
    })),
  setTo: (index) =>
    set((state) => ({
      image: index >= 0 && index <= 3 ? index : state.image,
    })),
}));
