import { useMenuStore } from "../zustand/menu";

const MenuOverlay = () => {
  const collapse = useMenuStore((state) => state.collapse);
  const toggleCollapse = useMenuStore((state) => state.toggleCollapse);

  if (!collapse) {
    return (
      <div
        onClick={toggleCollapse}
        className="z-[998] fixed w-full h-screen bg-black opacity-[.85]"
      />
    );
  }
};

export default MenuOverlay;
