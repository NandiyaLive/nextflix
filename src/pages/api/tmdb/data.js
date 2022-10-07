import instance from "../../../utils/axios";
import requests from "../../../utils/requests";

export default async function handler(req, res) {
  const { topic } = req.query;
  const user = "neranjana";
  let data;
  let status;

  user
    ? await instance
        .get(requests[topic])
        .then((res) => {
          data = res.data;
          status = 200;
        })
        .catch((error) => console.log(error))
    : ((data = "403 Forbidden"), (status = 403));

  res.status(status).json(data);
}
