import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [showFooter, handleShowFooter] = useState(false);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    (() => {
      router.pathname !== "/account" && handleShowFooter(true);
    })();
  }, [router]);

  console.log(showFooter);

  return showFooter ? (
    <footer className="container mx-auto my-4 flex items-center justify-between">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Netflix, Inc.</p>

      <p className="text-sm text-gray-400 cursor-pointer" onClick={toTop}>
        ↑ <span className="underline underline-offset-4">Back to Top</span>
      </p>
    </footer>
  ) : null;
};

export default Footer;
