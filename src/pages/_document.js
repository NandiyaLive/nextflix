import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Just another Netflix clone made with NextJS, TailwindCSS, Supabase and TMDb API ✨" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Netflix – Watch TV Programmes Online, Watch Films Online" />
        <meta property="og:description" content="Just another Netflix clone made with NextJS, TailwindCSS, Supabase and TMDb API ✨" />
        <meta
          property="og:image"
          content="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDI3Ni43NDIiPgogIDxwYXRoIGQ9Ik0xNDAuODAzIDI1OC45MDRjLTE1LjQwNCAyLjcwNS0zMS4wNzkgMy41MTYtNDcuMjk0IDUuNjc2TDQ0LjA1MSAxMTkuNzI0djE1MS4wNzNDMjguNjQ3IDI3Mi40MTggMTQuNTk0IDI3NC41OCAwIDI3Ni43NDJWMGg0MS4wOGw1Ni4yMTIgMTU3LjAyMVYwaDQzLjUxMXYyNTguOTA0em04NS4xMzEtMTU3LjU1OGMxNi43NTcgMCA0Mi40MzEtLjgxMSA1Ny44MzUtLjgxMXY0My4yNGMtMTkuMTg5IDAtNDEuNjE5IDAtNTcuODM1LjgxMXY2NC4zMjJjMjUuNDA1LTEuNjIxIDUwLjgwOS0zLjc4NSA3Ni40ODItNC41OTZ2NDEuNjE3bC0xMTkuNzI0IDkuNDYxVjBoMTE5LjcyNHY0My4yNDFoLTc2LjQ4MnY1OC4xMDV6bTIzNy4yODQtNTguMTA0aC00NC44NjJWMjQyLjE1Yy0xNC41OTQgMC0yOS4xODggMC00My4yMzkuNTM5VjQzLjI0MmgtNDQuODYyVjBINDYzLjIybC0uMDAyIDQzLjI0MnptNzAuMjY2IDU1LjEzMmg1OS4xODd2NDMuMjRoLTU5LjE4N3Y5OC4xMDRoLTQyLjQzM1YwaDEyMC44MDh2NDMuMjQxaC03OC4zNzV2NTUuMTMzem0xNDguNjQxIDEwMy41MDdjMjQuNTk0LjUzOSA0OS40NTYgMi40MzQgNzMuNTEgMy43ODN2NDIuNzAxYy0zOC42NDYtMi40MzQtNzcuMjkzLTQuODYzLTExNi43NS01LjY3NlYwaDQzLjI0djIwMS44ODF6bTEwOS45OTQgNDkuNDU3YzEzLjc4My44MTIgMjguMzc3IDEuNjIzIDQyLjQzIDMuMjQyVjBoLTQyLjQzdjI1MS4zMzh6TTEwMjQgMGwtNTQuODYzIDEzMS42MTVMMTAyNCAyNzYuNzQyYy0xNi4yMTctMi4xNjItMzIuNDMyLTUuMTM1LTQ4LjY0OC03LjgzOGwtMzEuMDc4LTc5Ljk5NC0zMS42MTcgNzMuNTFjLTE1LjY3OC0yLjcwNS0zMC44MTItMy41MTYtNDYuNDg0LTUuNjc4bDU1LjY3Mi0xMjYuNzVMODcxLjU3NiAwaDQ2LjQ4MmwyOC4zNzcgNzIuNjk5TDk3Ni43MDUgMEgxMDI0eiIgZmlsbD0iI2Q4MWYyNiIvPgo8L3N2Zz4K"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://neranjana.tk/" />
        <meta property="twitter:title" content="Netflix – Watch TV Programmes Online, Watch Films Online" />
        <meta property="twitter:description" content="Just another Netflix clone made with NextJS, TailwindCSS, Supabase and TMDb API ✨" />
        <meta
          property="twitter:image"
          content="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDI3Ni43NDIiPgogIDxwYXRoIGQ9Ik0xNDAuODAzIDI1OC45MDRjLTE1LjQwNCAyLjcwNS0zMS4wNzkgMy41MTYtNDcuMjk0IDUuNjc2TDQ0LjA1MSAxMTkuNzI0djE1MS4wNzNDMjguNjQ3IDI3Mi40MTggMTQuNTk0IDI3NC41OCAwIDI3Ni43NDJWMGg0MS4wOGw1Ni4yMTIgMTU3LjAyMVYwaDQzLjUxMXYyNTguOTA0em04NS4xMzEtMTU3LjU1OGMxNi43NTcgMCA0Mi40MzEtLjgxMSA1Ny44MzUtLjgxMXY0My4yNGMtMTkuMTg5IDAtNDEuNjE5IDAtNTcuODM1LjgxMXY2NC4zMjJjMjUuNDA1LTEuNjIxIDUwLjgwOS0zLjc4NSA3Ni40ODItNC41OTZ2NDEuNjE3bC0xMTkuNzI0IDkuNDYxVjBoMTE5LjcyNHY0My4yNDFoLTc2LjQ4MnY1OC4xMDV6bTIzNy4yODQtNTguMTA0aC00NC44NjJWMjQyLjE1Yy0xNC41OTQgMC0yOS4xODggMC00My4yMzkuNTM5VjQzLjI0MmgtNDQuODYyVjBINDYzLjIybC0uMDAyIDQzLjI0MnptNzAuMjY2IDU1LjEzMmg1OS4xODd2NDMuMjRoLTU5LjE4N3Y5OC4xMDRoLTQyLjQzM1YwaDEyMC44MDh2NDMuMjQxaC03OC4zNzV2NTUuMTMzem0xNDguNjQxIDEwMy41MDdjMjQuNTk0LjUzOSA0OS40NTYgMi40MzQgNzMuNTEgMy43ODN2NDIuNzAxYy0zOC42NDYtMi40MzQtNzcuMjkzLTQuODYzLTExNi43NS01LjY3NlYwaDQzLjI0djIwMS44ODF6bTEwOS45OTQgNDkuNDU3YzEzLjc4My44MTIgMjguMzc3IDEuNjIzIDQyLjQzIDMuMjQyVjBoLTQyLjQzdjI1MS4zMzh6TTEwMjQgMGwtNTQuODYzIDEzMS42MTVMMTAyNCAyNzYuNzQyYy0xNi4yMTctMi4xNjItMzIuNDMyLTUuMTM1LTQ4LjY0OC03LjgzOGwtMzEuMDc4LTc5Ljk5NC0zMS42MTcgNzMuNTFjLTE1LjY3OC0yLjcwNS0zMC44MTItMy41MTYtNDYuNDg0LTUuNjc4bDU1LjY3Mi0xMjYuNzVMODcxLjU3NiAwaDQ2LjQ4MmwyOC4zNzcgNzIuNjk5TDk3Ni43MDUgMEgxMDI0eiIgZmlsbD0iI2Q4MWYyNiIvPgo8L3N2Zz4K"
        />

        <link rel="icon" href="/favicon.svg" />
      </Head>

      <body className="bg-[black] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
