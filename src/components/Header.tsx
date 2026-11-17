import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <nav className="header__nav" aria-label="Main">
          <a href="/#icons">Icons</a>
          <a href="/#usage">Usage</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
