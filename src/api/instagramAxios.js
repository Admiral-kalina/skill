import axios from "axios";

const instagramAxios = axios.create({baseURL:`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=5&access_token=${process.env.INSTAGRAM_TOKEN}`})

export default instagramAxios;
