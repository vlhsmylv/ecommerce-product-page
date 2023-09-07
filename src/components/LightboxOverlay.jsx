import { useLightboxStore } from "../zustand/lightbox";

const LightboxOverlay = () => {
  const lightboxActive = useLightboxStore((state) => state.lightboxActive);

  if (lightboxActive) {
    return (
      <div
        className="z-[998] fixed w-full h-screen bg-black opacity-[.85]"
      />
    );
  }
};

export default LightboxOverlay;
