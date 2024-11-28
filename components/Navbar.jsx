import Logo from "@/assets/lws-kitchen.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
      <nav className="flex justify-between items-center">
        <a href="/index.html" className="text-3xl font-bold">
          <Image src={Logo} alt="LWS Kitchen" height={40} />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
