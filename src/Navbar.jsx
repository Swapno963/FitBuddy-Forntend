import { navLogo } from "./assets/images";
import { navLinks } from "./constant";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 ">
      <nav className="flex justify-between items-center ">
        <a href="/">
          <img className="m-0 w-[129px] h-[51px]" src={navLogo} alt="" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="leading-normal text-lg text-slate-50"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 text-lg font-medium text-slate-50 bg-blue-400 p-2 rounded-lg ">
          <a className="" href="/">
            Sign in
          </a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
      </nav>
    </header>
  );
}
