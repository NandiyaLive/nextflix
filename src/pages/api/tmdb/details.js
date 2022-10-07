import instance from "../../../utils/axios";

export default async function handler(req, res) {
  const API_KEY = process.env.TMDB_API_KEY;
  const { id } = req.query || null;
  const { media_type } = req.query || null;
  const { videos } = req.query || false;
  const user = "neranjana";
  let data;
  let status;

  user
    ? await instance
        .get(`/${media_type}/${id}${videos && "/videos"}?api_key=${API_KEY}&language=en-US`)
        .then((res) => {
          data = res.data;
          status = 200;
        })
        .catch((error) => console.log(error))
    : ((data = "403 Forbidden"), (status = 403));

  res.status(status).json(data);
}
