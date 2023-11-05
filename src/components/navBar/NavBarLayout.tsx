import { FontType, Logo, ThemeSwitch } from ".";

export const NavBarLayout = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center gap-3">
        <FontType />
        <ThemeSwitch />
      </div>
    </nav>
  );
};
