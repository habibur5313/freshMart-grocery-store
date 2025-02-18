import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FaHome } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { MdContactMail, MdOutlineMenu } from "react-icons/md";
const Navbar = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex px-4 sm:px-1 md:px-6 lg:px-14 justify-between items-center fixed top-0 z-50 bg-gray-600 rounded-b-xl opacity-50 text-white container mx-auto py-5 border-b">
      <div>
        <Link
          className="md:text-4xl text-2xl font-semibold md:font-bold uppercase"
          href={"/"}
        >
          FreshMart
        </Link>
      </div>
      <div className="hidden sm:flex mb-2">
        <ul className="text-xl  flex flex-wrap mt-3 justify-center items-center gap-3">
          <li>
            <Link className="flex items-center gap-1" href="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href="/products">
              <TbBrandBlogger />
              Products
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href="/contact">
            <MdContactMail />Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1"
              href={`${user ? "/profile" : "/api/auth/login"}`}
            >
              <CgProfile />
              Profile
            </Link>
          </li>
          {user ? (
            <li>
              <LogoutLink className="flex items-center gap-1">
                <AiOutlineLogout />
                Log out
              </LogoutLink>
            </li>
          ) : (
            <li>
              <LoginLink className="flex items-center gap-1">
                <CiLogin />
                Login
              </LoginLink>
            </li>
          )}
        </ul>
      </div>

      <div className="dropdown dropdown-end sm:hidden">
        <div
          tabIndex={0}
          role="button"
          className="text-2xl font-medium sm:text-3xl sm:font-semibold"
        >
          <MdOutlineMenu />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-black text-white text-xl rounded-box z-50 w-52 p-2 shadow"
        >
          <li>
            <Link className="flex items-center gap-1" href="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href="/products">
              <TbBrandBlogger />
              Products
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1" href="/contact">
            <MdContactMail /> Contact
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1"
              href={`${user ? "/profile" : "/api/auth/login"}`}
            >
              <CgProfile />
              Profile
            </Link>
          </li>
          {user ? (
            <li>
              <LogoutLink className="flex items-center gap-1">
                <AiOutlineLogout />
                Log out
              </LogoutLink>
            </li>
          ) : (
            <li>
              <LoginLink className="flex items-center gap-1">
                <CiLogin />
                Login
              </LoginLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
