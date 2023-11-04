import { FontType, Logo, Theme } from ".";

export const NavBarLayout = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center gap-12">
        <FontType />
        <Theme />
      </div>
    </nav>
  );
};
