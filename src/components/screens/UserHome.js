import Link from "next/link";
import Row from "../Row";
import Image from "next/future/image";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import bgImg from "../../../public/netflix-bg.jpg";
import requests from "../../utils/requests";
import Footer from "../Footer";

const UserHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch(`api/tmdb/data?topic=fetchNexflixOriginals`)
        .then((response) => response.json())
        .then((data) => {
          setData(data?.results[Math.floor(Math.random() * data?.results.length - 1)]);
        });
    })();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  };

  return (
    <>
      <section className="home-screen">
        <Navbar />

        <div className="banner h-screen sm:h-[70vh] relative">
          <div className="banner__bg relative h-full bg-top">
            <Image src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} className="h-screen object-cover object-top" alt="" fill priority />
            <div className="absolute bg-[black] top-0 bottom-0 left-0 right-0 opacity-50 h-full"></div>
            <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 h-1/2"></div>
          </div>

          <div className="banner__content container absolute left-0 right-0 bottom-20 sm:bottom-10 m-auto z-20">
            <h2 className={`${data?.title?.length > 20 || data?.name?.length > 20 || data?.original_name?.length > 20 ? "text-4xl" : "text-5xl"} max-w-xl sm:max-w-fit sm:text-4xl font-semibold`}>
              {data?.title || data?.name || data?.original_name}
            </h2>
            <h2 className="text-6xl sm:text-4xl font-semibold">{}</h2>
            <p className="max-w-2xl  my-4 sm:my-2">{truncate(data?.overview, 150)}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-white text-[black] py-2 px-6 font-semibold rounded-md flex gap-2 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                  </svg>
                </span>
                Play
              </button>

              <Link href={`/tv/${data?.id}`} key={data?.id}>
                <button className="bg-[#b2b2b2b8] text-white py-2 px-6 font-semibold rounded-md flex gap-2 items-center">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 fill-[white]">
                      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm-40-176h24v-64h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                    </svg>
                  </span>
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="rows mt-4">
          <Row topic="fetchNexflixOriginals" title="Netflix Originals" mediaType="tv" />
          <Row topic="fetchTrending" title="Trending" />
          <Row topic="fetchTopRated" title="Top Rated" mediaType="movie" />
          <Row topic="fetchActionMovies" title="Action" mediaType="movie" />
          <Row topic="fetchComedyMovies" title="Comedy" mediaType="movie" />
          <Row topic="fetchHorrorMovies" title="Horror" mediaType="movie" />
          <Row topic="fetchRomanceMovies" title="Romance" mediaType="movie" />
          <Row topic="fetchDocumentaries" title="Documentaries" mediaType="movie" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UserHome;
