import Head from "next/head";
import UserHome from "../components/screens/UserHome";
import PublicHome from "../components/screens/PublicHome";
import { supabase } from "../utils/supabase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const userData = await supabase.auth.user();
  //     userData ? setUser(userData) : setUser(null);
  //   })();
  // }, []);

  useEffect(() => {
    setUser(supabase.auth.session()?.user);

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Netflix – Watch TV Programmes Online, Watch Films Online</title>
      </Head>

      {user ? <UserHome /> : <PublicHome />}
    </>
  );
}

// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (!user) {
//     return { props: {} };
//   }

//   console.log(user);

//   return { props: { user } };
// }
