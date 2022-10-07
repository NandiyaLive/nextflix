import Link from "next/link";
import Image from "next/future/image";
import bgImg from "../../public/netflix-bg.jpg";
import { supabase } from "../utils/supabase/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import ProtectedRoute from "../components/ProtectedRoute";

const signOutPage = () => {
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      signOut();
    }, 30000);
  }, []);

  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>

      <section className="sign-out-screen">
        <nav className="container absolute top-0 left-0 right-0 pt-4 flex items-start justify-between z-10">
          <div className="nav__logo cursor-pointer">
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742" className="h-9">
                <path
                  d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43v251.338zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z"
                  fill="#d81f26"
                />
              </svg>
            </Link>
          </div>
        </nav>

        <div className="banner">
          <div className="banner__bg">
            <Image src={bgImg} className="h-screen object-cover bg-no-repeat bg-top" alt="Background" />
            <div className="absolute bg-[black] top-0 bottom-0 left-0 right-0 opacity-70"></div>
          </div>
        </div>

        <div className=" container absolute text-[white] left-0 right-0  top-1/2 bottom-1/2 -translate-y-1/2 h-fit bg-[#000000b1] max-w-md w-[calc(100%-2rem)] z-20">
          <div className="sm:p-12 py-12 px-4">
            <h1 className="text-3xl font-semibold opacity-100">Leaving So Soon?</h1>
            <p className="mt-2">Just so you know, you don't always need to sign out of Netflix. It's only necessary if you're on a shared or public computer.</p>
            <p className="mt-2">You'll be redirected to Netflix.com in 30 seconds.</p>
            <button className="mt-4 bg-[white] text-[color:black] py-3 w-full flex items-center justify-center" onClick={() => signOut()}>
              Go Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtectedRoute(signOutPage);
