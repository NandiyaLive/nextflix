import Image from "next/future/image";
import Head from "next/head";
import useSWR from "swr";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProtectedRoute from "../../components/ProtectedRoute";

const TVShowPage = ({ tv_id }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const getTvDetails = () => {
    const { data, error } = useSWR(`/api/tmdb/details?id=${tv_id}&media_type=tv`, fetcher);

    return {
      tvData: data,
      tvDataError: error,
    };
  };

  const getVideos = () => {
    const { data, error } = useSWR(`/api/tmdb/details?id=${tv_id}&media_type=tv&videos=true`, fetcher);

    return {
      videos: data,
      videosError: error,
    };
  };

  const { tvData } = getTvDetails();
  const { videos } = getVideos();

  const lastGenre = tvData?.genres?.length - 1;
  const title = tvData?.title || tvData?.name || tvData?.original_name;

  return (
    <>
      <Head>
        <title>{tvData ? `${tvData?.title || tvData?.name || tvData?.original_name} | Netflix` : "Netflix"}</title>
      </Head>
      <Navbar />

      {tvData ? (
        <section>
          <div className="banner h-screen">
            <div className="banner__bg relative h-full">
              <Image src={`https://image.tmdb.org/t/p/original${tvData?.backdrop_path}`} className="h-screen object-cover bg-no-repeat bg-top" alt="" fill priority />
              <div className="absolute bg-[black] top-0 bottom-0 left-0 right-0 opacity-60 h-full"></div>
              <div className="bg-gradient-to-t from-black absolute bottom-0 left-0 right-0 h-2/3"></div>
            </div>

            <div className="banner__content container absolute left-0 right-0 bottom-10 sm:bottom-5 m-auto z-20 flex gap-10 sm:gap-4 items-end sm:flex-col sm:items-center">
              <div className="shrink-0">
                <Image src={`https://image.tmdb.org/t/p/original${tvData?.poster_path}`} height={400} width={250} className="rounded-lg" alt="Poster" />
              </div>
              <div>
                <h1 className={`${title.length > 20 ? "text-4xl" : "text-5xl"} max-w-xl sm:max-w-fit sm:text-3xl font-semibold sm:text-center`}>
                  {title} ({new Date(tvData?.first_air_date).getFullYear()})
                </h1>
                <div className="flex flex-col mt-2">
                  <p className="sm:text-center">
                    <p className="sm:text-center">{`${tvData?.first_air_date} | ${tvData?.status}`}</p>
                    {tvData.genres?.map((genre, index) => {
                      return <span>{`${genre.name}${index !== lastGenre ? " • " : ""}`}</span>;
                    })}
                  </p>

                  <div>
                    <p className="font-semibold text-xl mt-2">Overview</p>
                    <p className="max-w-2xl my-2 sm:mt-1 sm:mb-2">{tvData?.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" container m-auto my-8 ">
            <h1 className="text-4xl font-bold mb-4">Media</h1>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Trailers</h2>
              <div className="row flex items-center gap-2 overflow-scroll">
                {videos?.results.map((video) => {
                  return (
                    video?.type === "Trailer" && (
                      <iframe width="500px" height="300px" src={`https://www.youtube.com/embed/${video?.key}`} frameBorder="0" allowFullScreen title={video?.name} className="shrink-0" />
                    )
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Behind the Scenes</h2>
              <div className="row flex items-center gap-2 overflow-scroll">
                {videos?.results.map((video) => {
                  return (
                    video?.type === "Behind the Scenes" && (
                      <iframe width="500px" height="300px" src={`https://www.youtube.com/embed/${video?.key}`} frameBorder="0" allowFullScreen title={video?.name} className="shrink-0" />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="grid h-screen place-items-center">
          <div className="spinner-box w-fit h-fit m-auto">
            <div className="three-quarter-spinner border-nf"></div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default ProtectedRoute(TVShowPage);

export async function getServerSideProps(context) {
  const tv_id = context.query.slug;

  return { props: { tv_id } };
}
