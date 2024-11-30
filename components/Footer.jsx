import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icons/SVG";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="/index.html" className="text-3xl font-bold">
              <Image
                width={102}
                height={40}
                src={"/assets/lws-kitchen.png"}
                alt="logo"
              />
            </a>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">LWS Kitchen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Copyright
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2020 LWS Kitchen - All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              className="text-gray-400 hover:text-orange-500"
              target="_blank"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-orange-500"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-400 hover:text-orange-500"
              target="_blank"
            >
              <YoutubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
