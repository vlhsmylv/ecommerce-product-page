import {
  iconNext,
  iconPrev,
  productImages,
  productImageThumbnails,
  close,
} from "../assets";
import { useCarouselStore } from "../zustand/carousel";
import { useLightboxStore } from "../zustand/lightbox";
import { AddToCart } from "./Cart";

const Lightbox = () => {
  const lightboxActive = useLightboxStore((state) => state.lightboxActive);
  const toggleLightboxActive = useLightboxStore(
    (state) => state.toggleLightboxActive
  );

  const currentImage = useCarouselStore((state) => state.image);
  const nextImage = useCarouselStore((state) => state.nextImage);
  const prevImage = useCarouselStore((state) => state.prevImage);
  const setTo = useCarouselStore((state) => state.setTo);

  if (lightboxActive) {
    return (
      <div
        role="dialog"
        className="z-[999] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        id="lightbox-viewer"
      >
        <button
          onClick={toggleLightboxActive}
          className="right-0 -top-10 absolute"
        >
          <img
            src={close}
            width={20}
            height={20}
            className="filter-white ease-in-out duration-200 hover-filter-orange"
          />
        </button>
        <img
          src={productImages[currentImage].src}
          className="rounded-xl w-full h-full max-h-[700px] lg:max-w-[600px] object-cover"
          alt={productImages[currentImage].title}
        />
        <button
          id="mobile-controller-prev"
          onClick={prevImage}
          className="p-3 -ml-5 w-[50px] h-[50px] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-0"
        >
          <div className="flex justify-center mr-[2px]">
            <img
              className="ease-in-out duration-200 hover-filter-orange"
              src={iconPrev}
              alt="Previous Image"
            />
          </div>
        </button>
        <button
          id="mobile-controller-next"
          onClick={nextImage}
          className="p-3 -mr-5 w-[50px] h-[50px] bg-white rounded-full absolute top-1/2 -translate-y-1/2 right-0"
        >
          <div className="flex justify-center ml-[2px]">
            <img
              className="ease-in-out duration-200 hover-filter-orange"
              src={iconNext}
              alt="Next Image"
            />
          </div>
        </button>
        <ul
          id="lightbox-controller"
          className="absolute flex left-1/2 -translate-x-1/2 max-w-[350px] lg:w-full w-[80%] -bottom-24 gap-3"
        >
          {productImageThumbnails.map((thumbnail) => (
            <li
              key={thumbnail.key}
              className={`${
                thumbnail.id === currentImage
                  ? "border-orange"
                  : "border-transparent"
              } bg-white cursor-pointer rounded-xl border-2  ease-in-out duration-100`}
              onClick={() => setTo(thumbnail.id)}
            >
              <img
                src={thumbnail.src}
                alt=""
                className={`${
                  thumbnail.id === currentImage ? "opacity-[.3]" : ""
                } w-full h-full ease-in-out duration-100 rounded-[10px] hover:opacity-[.3]`}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const Carousel = () => {
  const toggleLightboxActive = useLightboxStore(
    (state) => state.toggleLightboxActive
  );

  const currentImage = useCarouselStore((state) => state.image);
  const nextImage = useCarouselStore((state) => state.nextImage);
  const prevImage = useCarouselStore((state) => state.prevImage);
  const setTo = useCarouselStore((state) => state.setTo);

  return (
    <div id="carousel" className="flex flex-col gap-5">
      <div className="relative" id="carousel-viewer">
        <img
          onClick={toggleLightboxActive}
          src={productImages[currentImage].src}
          className="cursor-pointer lg:rounded-xl w-full h-full max-h-[600px] lg:max-w-[500px] object-cover"
          alt={"Dynamic"}
        />
        <button
          id="mobile-controller-prev"
          onClick={prevImage}
          className="p-3 ml-5 w-[50px] h-[50px]  bg-white rounded-full lg:hidden absolute top-1/2 -translate-y-1/2 left-0"
        >
          <div className="ease-in-out duration-200 hover-filter-orange flex justify-center mr-[2px]">
            <img src={iconPrev} alt="Previous Image" />
          </div>
        </button>
        <button
          id="mobile-controller-next"
          onClick={nextImage}
          className="p-3 mr-5 w-[50px] h-[50px]  bg-white rounded-full lg:hidden absolute top-1/2 -translate-y-1/2 right-0"
        >
          <div className="flex justify-center ml-[2px]">
            <img
              className="ease-in-out duration-200 hover-filter-orange"
              src={iconNext}
              alt="Next Image"
            />
          </div>
        </button>
      </div>
      <ul
        id="carousel-controller"
        className="lg:flex max-w-[500px] hidden gap-5"
      >
        {productImageThumbnails.map((thumbnail) => (
          <li
            key={thumbnail.key}
            className={`${
              thumbnail.id === currentImage
                ? "border-orange"
                : "border-transparent "
            } cursor-pointer rounded-xl border-2 ease-in-out duration-100`}
            onClick={() => setTo(thumbnail.id)}
          >
            <img
              src={thumbnail.src}
              alt=""
              className={`${
                thumbnail.id === currentImage ? "opacity-[.3]" : ""
              } w-full h-full ease-in-out duration-100 rounded-[10px] hover:opacity-[.3]`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Product = () => {
  return (
    <section className="lg:flex lg:mt-20 lg:mx-28 justify-center items-center lg:gap-14 gap-5">
      <Carousel />
      <Lightbox />
      <div
        className="lg:mx-0 mx-8 lg:mt-0 mt-10 flex flex-col gap-5"
        id="text-and-actions"
      >
        <div id="headers" className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-orange uppercase">
            sneaker company
          </h4>
          <h2 className="max-w-[450px] lg:text-4xl text-3xl text-very-dark-blue font-semibold">
            Fall Limited Edition Sneakers
          </h2>
        </div>
        <p className="lg:max-w-[450px] text-dark-grayish-blue text-[18px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        <div
          id="price-container"
          className="flex lg:flex-col lg:justify-start justify-between lg:items-start items-center gap-1"
        >
          <div className="flex gap-3 items-center">
            <span className="font-semibold text-very-dark-blue lg:text-3xl text-2xl">
              $125.00
            </span>
            <span className="bg-page-orange px-3 py-1 font-semibold lg:text-[14px] lg:text-xl text-base text-orange rounded-md">
              50%
            </span>
          </div>
          <span className="line-through text-dark-grayish-blue lg:text-[18px] lg:text-xl text-lg">
            $250.00
          </span>
        </div>
        <AddToCart />
      </div>
    </section>
  );
};

export default Product;
