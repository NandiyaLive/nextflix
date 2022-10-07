import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase/client";

const ProtectedRoute = (Component) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
      const user = supabase.auth.user();
      user ? setUser(user) : router.push("/");
    }, []);

    return user ? (
      <Component {...props} />
    ) : (
      <>
        <Head>
          <title>Netflix – Watch TV Programmes Online, Watch Films Online</title>
        </Head>
      </>
    );
  };
};

export default ProtectedRoute;
