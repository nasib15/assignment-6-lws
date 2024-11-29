import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "./Icons/SVG";

const Navbar = () => {
  return (
    <header className="mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50 w-full">
      <nav className="flex justify-between items-center">
        <a href="/index.html" className="text-3xl font-bold">
          <Image
            src={"/assets/lws-kitchen.png"}
            width={102}
            height={40}
            alt="LWS Kitchen"
          />
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="./category.html" className="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link href="./recipes.html" className="hover:text-orange-500">
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-orange-500">
            <SearchIcon />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
