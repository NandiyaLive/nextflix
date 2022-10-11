import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import bgImg from "../../public/netflix-bg.jpg";
import { supabase } from "../utils/supabase/client";
import validator from "validator";
import { useRouter } from "next/router";

const signInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);

  const signInWithMagicLink = async () => {
    if (!validator.isEmail(email)) {
      setError("Invalid Email!");
      return;
    }

    const { error, data } = await supabase.auth.signIn({
      email,
    },
    {
      redirectTo: "http://localhost:3000",
    });

    error ? setError({ error }) : setSubmited(true);

    redirectToHome();
  };

  const signInWithGoogle = async () => {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: "http://localhost:3000",
      }
    );

    error && setError({ error });

    redirectToHome();
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 10000);
  }, [error]);

  const redirectToHome = () => {
    setTimeout(() => {
      window.location = "/";
    }, 20000);
  };

  return (
    <>
      <Head>
        <title>Sign In - Netflix</title>
      </Head>
      <section className="sign-in-screen">
        <div
          className={`absolute top-4 left-0 right-0 z-50 w-fit m-auto py-2 px-6 rounded-md border-2 border-red-500 border- bg-red-300 flex gap-1 items-center transition-opacity ease-out duration-300 ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="h-6 fill-red-500">
            <path
              className="clr-i-solid clr-i-solid-path-1"
              d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6Zm-1.49 6a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 25.5a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 25.5Z"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <p className="text-sm text-black font-medium">{error}</p>
        </div>

        <nav className="container absolute top-0 left-0 right-0 pt-4 flex items-start justify-between z-10">
          <Link href="/">
            <div className="nav__logo cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 276.742" className="h-9">
                <path
                  d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43v251.338zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z"
                  fill="#d81f26"
                />
              </svg>
            </div>
          </Link>
        </nav>

        <div className="banner">
          <div className="banner__bg">
            <Image src={bgImg} className="h-screen object-cover bg-top" alt="Background" />
            <div className="absolute bg-[black] top-0 bottom-0 left-0 right-0 opacity-70"></div>
          </div>
        </div>

        <div className=" container absolute text-[white] left-0 right-0  top-1/2 bottom-1/2 -translate-y-1/2 h-fit bg-[#000000b1] max-w-md w-[calc(100%-2rem)] z-20">
          {submited ? (
            <div className="py-12 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-24 mb-6 block m-auto">
                <path
                  d="M386.193 499.974c-60.086 11.162-120.171 14.56-180.257 10.17a708.074 708.074 0 0 1-47.571-5.107c-10.321-1.46-.2-151.956-.2-151.956l-13.863-55.12 44.369 7.784c15.062-1.413 22.301-3.46 37.364-3.892 46.763-1.366 140.893 2.335 150.736 25.326-8.722 57.597-5.582 115.196 9.422 172.795z"
                  fill="#666"
                />
                <path
                  d="M191.341 319.915h-.012s-21.002 2.042-39.524 4.839a718.824 718.824 0 0 0-14.979 2.424 428.136 428.136 0 0 1 1.591 11.559c2.136 17.236 2.717 31.374 2.717 31.374 2.113 43.284-2.452 86.579-13.731 129.862 26.178 4.857 52.356 8.255 78.534 10.17v-.012c23.784-48.655 29.424-139.367 30.58-192.995a698.3 698.3 0 0 0-45.176 2.779z"
                  fill="#4d4d4d"
                />
                <path fill="#2ba5f7" d="M244.258 25.512 226.697 42.63l4.145 24.169-21.706-11.407-21.706 11.407 4.145-24.169-17.549-17.118 24.263-3.526L209.136 0l10.859 21.986z" />
                <path fill="#f95428" d="m144.52 167.518-20.924 20.41 4.939 28.805-25.874-13.603-25.886 13.603 4.951-28.805-20.936-20.41 28.934-4.203 12.937-26.213 12.937 26.213z" />
                <path
                  d="m194.634 275.102-5.963 30.642-44.968 20.29c-2.289.362-4.589.747-6.877 1.144-2.312-15.261-5.453-30.51-9.423-45.771l-.21-3.211a2033.259 2033.259 0 0 1 67.441-3.094zm191.758 3.199-.199 3.106c-3.97 15.261-7.111 30.51-9.423 45.771-61.802-10.66-123.604-13.077-185.429-7.263l10.952-32.074c6.574-6.574 27.871-6.866 34.305-13.556 49.951-.467 99.913.864 149.794 4.016z"
                  fill="#e54728"
                />
                <path
                  d="M496.311 296.914c-.339 0-.681-.02-1.025-.06a2064.95 2064.95 0 0 0-109.441-9.813c-49.334-3.118-99.516-4.461-149.164-4l-41.874.816c-21.985.64-44.578 1.677-67.068 3.079a2076.471 2076.471 0 0 0-111.026 9.918c-4.806.551-9.153-2.881-9.711-7.685a8.757 8.757 0 0 1 7.685-9.711 2095.002 2095.002 0 0 1 111.965-10.001 2051.506 2051.506 0 0 1 67.731-3.108l42.035-.82.17-.001c49.99-.464 100.608.89 150.356 4.034a2082.126 2082.126 0 0 1 110.369 9.896 8.756 8.756 0 0 1 7.684 9.712c-.519 4.46-4.305 7.744-8.686 7.744z"
                  fill="#4d4d4d"
                />
                <path
                  d="M353.792 99.385a8.757 8.757 0 0 1-8.757-8.757V33.627c0-4.836 3.92-8.757 8.757-8.757s8.757 3.921 8.757 8.757v57.001a8.757 8.757 0 0 1-8.757 8.757zm0 152.003a8.757 8.757 0 0 1-8.757-8.757V185.63c0-4.836 3.92-8.757 8.757-8.757s8.757 3.921 8.757 8.757v57.001a8.757 8.757 0 0 1-8.757 8.757zm-47.501-104.502H249.29a8.757 8.757 0 0 1-8.757-8.757 8.757 8.757 0 0 1 8.757-8.757h57.001a8.757 8.757 0 0 1 8.757 8.757 8.757 8.757 0 0 1-8.757 8.757zm152.003 0h-57.001a8.757 8.757 0 0 1-8.757-8.757 8.757 8.757 0 0 1 8.757-8.757h57.001a8.757 8.757 0 0 1 8.757 8.757 8.757 8.757 0 0 1-8.757 8.757z"
                  fill="#2ba5f7"
                />
                <path
                  d="M387.381 113.299a8.756 8.756 0 0 1-6.193-14.949l19.191-19.191a8.758 8.758 0 0 1 12.385 12.384l-19.191 19.191a8.739 8.739 0 0 1-6.192 2.565zm19.19 86.366a8.733 8.733 0 0 1-6.193-2.565l-19.191-19.191a8.758 8.758 0 0 1 12.385-12.384l19.191 19.191a8.756 8.756 0 0 1-6.192 14.949zm-86.368-86.366a8.733 8.733 0 0 1-6.193-2.565l-19.191-19.191a8.758 8.758 0 0 1 12.385-12.384l19.191 19.191a8.756 8.756 0 0 1-6.192 14.949z"
                  fill="#f95428"
                />
                <path
                  d="M236.598 274.285a1427.942 1427.942 0 0 1-19.511 19.885l-25.746 25.746h-.012l-50.196 50.196-59 59c-5.733 5.733-15.027 5.733-20.749 0-5.733-5.733-5.733-15.027 0-20.749l76.175-76.175 6.142-6.153 50.931-50.931 1.693-1.693a1490.515 1490.515 0 0 1 120.778-108.308l42.093-33.802-33.803 42.093a1489.036 1489.036 0 0 1-88.795 100.891z"
                  fill="#f7b239"
                />
              </svg>

              <h1 className="text-2xl font-medium opacity-100 text-center">
                Check
                <br />
                <span className="underline underline-offset-4">{email}</span>
                <br />
                for the Magic Link.
              </h1>
            </div>
          ) : (
            <div className="py-12 px-4">
              <h1 className="text-3xl font-semibold opacity-100 text-center">Sign In</h1>
              <div className="mt-10">
                <input type="email" placeholder="Enter Email" className="py-3 mb-2 px-2 w-full text-[black]" onChange={(e) => setEmail(e.target.value)} required />
                <button className="bg-[white] text-[color:black] mt-3 py-3 w-full flex items-center justify-center disabled:bg-[#c8c8c8]" disabled={email ? false : true} onClick={signInWithMagicLink}>
                  Send Magic Link
                </button>
              </div>
              <div className="flex items-center my-6 gap-4">
                <hr className="bg-[#aaaaaa] grow" />
                <p>Or</p>
                <hr className="bg-[#aaaaaa] grow" />
              </div>
              <button className="bg-[white] text-[color:black] py-3 w-full flex items-center justify-center" onClick={signInWithGoogle}>
                <span className="pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 mr-2">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                    <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
                  </svg>
                </span>
                Sign In with Google
              </button>
            </div>
          )}
          {/* <div className="py-12 px-4">
            <h1 className="text-3xl font-semibold opacity-100 text-center">Sign In</h1>
            <button className="bg-[white] text-[color:black] py-3 w-full flex items-center justify-center mt-4" onClick={signInWithGoogle}>
              <span className="pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 mr-2">
                  <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                  <path
                    fill="#34A853"
                    d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                  />
                  <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                  <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
                </svg>
              </span>
              Sign In with Google
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default signInPage;

// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (user) {
//     return { props: {}, redirect: { destination: "/" } };
//   }

//   return { props: { user } };
// }
