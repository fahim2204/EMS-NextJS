import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <nav className="border-b w-full sticky top-0 z-50 px-6">
        <div className="sm:max-w-6xl md:mx-auto py-2 flex justify-between">
          <div className="hover:scale-110 transition-all duration-500">
            <Link href={"/"}>
              <Image
                className="mx-auto"
                src="/img/ems-logo.png"
                width={100}
                height={10}
                priority
                property="contain"
              />
            </Link>
          </div>
          <div className="space-x-2 flex items-center">
            <Link
              href={"/register"}
              className="border border-sky-600 rounded-sm py-1 px-3 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-300"
            >
              Register
            </Link>
            <Link
              href={"/login"}
              className="border border-green-700 rounded-sm py-1 px-3 text-green-700 hover:bg-green-700 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <>
              <Link
                href={"/profile"}
                className="border border-lime-500 rounded-sm py-1 px-3 text-lime-500 hover:bg-lime-500 hover:text-white transition duration-300"
              >
                Profile
              </Link>
              <button className="border border-sky-500 rounded-sm py-2 px-2 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300">
                <FiLogOut />
              </button>
            </>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
