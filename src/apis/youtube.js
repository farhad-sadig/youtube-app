import axios from "axios";
const KEY = "AIzaSyAzHIjKJy0NlkjYyZXeA9YL_Gz9eHs2spg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video"
  }
});
