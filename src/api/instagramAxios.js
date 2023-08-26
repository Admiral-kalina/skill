import axios from "axios";

const instagramAxios = axios.create({baseURL:process.env.INSTAGRAM_BACKEND})

export default instagramAxios;