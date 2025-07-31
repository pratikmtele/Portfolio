import { Container } from "./index.js";

function Footer() {
  return (
    <Container>
      <footer className="mt-14 sm:mt-20 h-10 sm:h-20 sm:flex sm:justify-between sm:items-center">
        <p className="text-sm font-light text-center dark:text-white/70">
          Copyright © 2024 by Pratik Tele
        </p>
        <ul className="hidden sm:flex">
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#home" className="menu-item" data-text="Home">Home</a>
          </li>
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#about" className="menu-item" data-text="About">About</a>
          </li>
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#education" className="menu-item" data-text="Education">Education</a>
          </li>
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#projects" className="menu-item" data-text="Projects">Projects</a>
          </li>
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#education" className="menu-item" data-text="Education">Education</a>
          </li>
          <li className="relative menu font-semibold text-md border border-transparent hover:bg-slate-400/15 dark:hover:bg-white/10 dark:hover:border dark:hover:border-slate-400/25 py-1 px-4 rounded-md overflow-hidden dark:text-white">
            <a href="#contact" className="menu-item" data-text="Contact">Contact</a>
          </li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
