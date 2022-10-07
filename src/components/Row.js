import Image from "next/future/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import { SpinnerBox } from "./Elements";

const Row = ({ topic, title, mediaType }) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      await fetch(`api/tmdb/data?topic=${topic}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
        });
    })();
  }, []);

  return (
    <div className="container my-8 relative min-h-[250px]">
      <h1 className="text-3xl font-semibold my-4">{title}</h1>
      {data ? (
        <div className="row flex w-fit items-center gap-2 overflow-scroll max-w-full">
          {data.map((item) => {
            const media_type = item?.media_type || mediaType;
            return (
              <Link href={media_type === "movie" ? `/movie/${item?.id}` : media_type === "tv" ? `/tv/${item?.id}` : "#"} key={item?.id}>
                <div className="poster relative group shrink-0 cursor-pointer" key={item?.id} id={item?.id}>
                  <Image src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} height={0} width={220} alt={`${item?.title || item?.name || item?.original_name} Poster`} className="w-52" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[black] opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-300"></div>
                  <p className="px-4 absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center text-xl font-medium opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    {item?.title || item?.name || item?.original_name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <SpinnerBox />
      )}
    </div>
  );
};

export default Row;
