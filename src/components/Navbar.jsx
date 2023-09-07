import { profilePicture, hamburger, close } from "../assets";
import { useMenuStore } from "../zustand/menu";
import { CartButton } from "./Cart";

const links = [
  {
    title: "Collections",
  },
  {
    title: "Men",
  },
  {
    title: "Women",
  },
  {
    title: "About",
  },
  {
    title: "Contact",
  },
];

const MobileMenu = () => {
  const collapse = useMenuStore((state) => state.collapse);
  const toggleCollapse = useMenuStore((state) => state.toggleCollapse);

  return (
    <>
      <button className="lg:hidden mt-2" onClick={toggleCollapse}>
        <img className="shrink-0" width={22} height={22} src={hamburger} alt="Hamburger Menu Icon" />
      </button>
      {!collapse ? (
        <aside className="z-[999] lg:hidden flex h-screen flex-col gap-20 py-12 px-10 top-0 left-0 fixed bg-white max-w-[400px] w-full">
          <button onClick={toggleCollapse}>
            <img
              src={close}
              width={22}
              className="shrink-0"
              height={22}
              alt="Hamburger Close Icon"
            />
          </button>
          <ul className={`flex flex-col gap-5`}>
            {links.map((link, i) => (
              <li
                key={i}
                className="font-bold text-very-dark-blue cursor-pointer text-2xl text-dark-grayish-blue"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </aside>
      ) : (
        <></>
      )}
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="lg:border-b lg:border-b-text-grayish-blue lg:mx-24 mx-18 py-10 flex justify-between items-center">
      <section className="flex gap-6 items-center">
        <MobileMenu />
        <h1 className="text-very-dark-blue cursor-pointer text-4xl font-bold">
          sneakers
        </h1>
        <ul className="ml-4 lg:flex hidden gap-5">
          {links.map((link, i) => (
            <li
              key={i}
              className="ease-in-out duration-100 hover:underline cursor-pointer font-normal text-lg text-dark-grayish-blue"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex gap-10 items-center">
        <CartButton />
        <img
          src={profilePicture}
          alt="Profile picture"
          width={56}
          height={56}
          className="shrink-0 cursor-pointer rounded-full ease-in-out duration-200 border-2 border-transparent hover:border-orange"
        />
      </section>
    </nav>
  );
};

export default Navbar;
