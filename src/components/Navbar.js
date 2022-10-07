import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [showBg, handleShowBg] = useState(false);
  const [showMenu, handleShowMenu] = useState(false);

  const transitionNavbar = () => {
    window.pageYOffset > 100 ? handleShowBg(true) : handleShowBg(false);
  };

  useEffect(() => {
    handleShowBg;
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 pt-5 sm:pt-3 z-50">
      <div className={`bg-black w-full h-20 sm:h-16 fixed top-0 left-0 right-0 transition-opacity ${showBg ? "opacity-100" : "opacity-0 ease-out duration-700"}`}></div>
      <div className="container flex items-center justify-between z-50">
        <div className="flex gap-10 items-center z-50">
          <div className="nav__logo cursor-pointer">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742" className="h-8 sm:h-7">
                <path
                  d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43v251.338zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z"
                  fill="#d81f26"
                />
              </svg>
            </Link>
          </div>

          {/* <ul className="nav__links flex gap-4 items-center text-white text-sm font-medium sm:hidden">
            <Link href="/">
              <li className="cursor-pointer opacity-90 hover:opacity-100">Home</li>
            </Link>
            <li className="cursor-pointer opacity-90 hover:opacity-100">TV Shows</li>
            <li className="cursor-pointer opacity-90 hover:opacity-100">Movies</li>
            <li className="cursor-pointer opacity-90 hover:opacity-100">New & Popular</li>
            <li className="cursor-pointer opacity-90 hover:opacity-100">My List</li>
          </ul> */}
        </div>
        <div
          className="avatar z-20 relative"
          onClick={() => {
            handleShowMenu(router.pathname != "/account" && ((showMenu) => !showMenu));
          }}
        >
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-10">
            <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
              <rect width="36" height="36" rx="72" fill="#FFF" />
            </mask>
            <g mask="url(#a)">
              <path fill="#a3b6a2" d="M0 0h36v36H0z" />
              <rect width="36" height="36" transform="rotate(-141 21.615 13.906)" fill="#fffaac" rx="6" />
              <g transform="rotate(-9 1.19 -12.089)">
                <path d="M15 19c2 1 4 1 6 0" stroke="#000" strokeLinecap="round" />
                <rect x="10" y="14" width="1.5" height="2" rx="1" fill="#000" />
                <rect x="24" y="14" width="1.5" height="2" rx="1" fill="#000" />
              </g>
            </g>
          </svg>

          {showMenu && (
            <ul className="absolute top-14 sm:top-12 right-0 z-30 bg-stone-900 w-max text-right">
              <Link href="/account">
                <li className="py-3 px-10 text-sm cursor-pointer">Account</li>
              </Link>
              <Link href="/sign-out">
                <li className="py-3 px-10 text-sm cursor-pointer bg-nf">Sign Out</li>
              </Link>
            </ul>
          )}

          {/* {showMenu && (
            <ul className="absolute flex top-0 right-20 z-50 bg-stone-900 w-36">
              <Link href="/account">
                <li className="py-3 px-4 text-sm font-semibold cursor-pointer shrink-0">Account</li>
              </Link>
              <Link href="/sign-out">
                <li className="py-3 px-4 text-sm font-semibold cursor-pointer shrink-0 bg-nf">Sign Out</li>
              </Link>
            </ul>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
