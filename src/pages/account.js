import { supabase } from "../utils/supabase/client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";
import Link from "next/link";

const AccountPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const userData = await supabase.auth.user();
      userData ? setUser(userData) : setUser(null);
    })();
  }, []);

  var date = new Date(user?.confirmed_at);
  const accCreationDate = `${date.toLocaleString("default", { month: "long" })} ${date.getFullYear()}`;

  return (
    <>
      <Head>
        <title>Account</title>
      </Head>

      <Navbar />
      <section className="account-page">
        <div className="container mt-24">
          <h1 className="text-3xl font-medium">Account</h1>
          <p className=" mt-1 text-sm font-bold flex gap-2 items-center">
            <span>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5">
                <path
                  d="M21.49 8.991c-.102-1.332-1.225-2.356-2.551-2.458-1.53-.103-3.47-.205-5.306-.308l2.857-2.868a.806.806 0 0 0 0-1.127.799.799 0 0 0-1.123 0l-3.469 3.586-2.551-2.459a.799.799 0 0 0-1.123 0 .806.806 0 0 0 0 1.127l1.837 1.844c-1.734-.103-3.775.102-5.306.205-.714 0-1.224.307-1.735.82-.408.409-.714.921-.714 1.638C2.204 10.425 2 12.576 2 14.113c0 1.536.204 3.687.306 5.121.102 1.332 1.225 2.356 2.551 2.459C6.898 21.795 9.755 22 12 22s5.102-.205 7.143-.307c1.326-.103 2.449-1.127 2.55-2.459.103-1.434.307-3.585.307-5.121 0-1.537-.306-3.688-.51-5.122Zm-5 3.585-3.061 3.073a.799.799 0 0 1-1.123 0l-1.428-1.434-2.551 2.56c-.205.103-.307.206-.51.206a.778.778 0 0 1-.51-.205.806.806 0 0 1 0-1.127l3.06-3.073a.799.799 0 0 1 1.123 0l1.53 1.537 2.551-2.561a.799.799 0 0 1 1.123 0c.102.307.102.717-.204 1.024Z"
                  className="fill-nf"
                />
              </svg>
            </span>
            Member Since {accCreationDate}
          </p>
          <hr className="mt-6 mb-3" />

          {user?.user_metadata.full_name && (
            <p className="text-xl text-right mb-4">
              Hello <span className=" font-medium">{user?.user_metadata.full_name}</span>!
            </p>
          )}

          <h2 className="text-xl font-medium mb-2">Membership</h2>

          <p className="my-1">
            <span className="font-medium">Email : </span> {user?.email}
          </p>
          <p className="my-1">
            <span className="font-medium">User ID : </span>
            {user?.id}
          </p>

          <Link href="/sign-out">
          <button className="mt-4 text-white bg-nf font-medium px-4 py-2 rounded-sm">Sign Out</button>
        </Link>
        </div>
      </section>
    </>
  );
};

export default ProtectedRoute(AccountPage);
// export default AccountPage;
