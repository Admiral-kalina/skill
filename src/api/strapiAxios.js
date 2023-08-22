import axios from "axios";

const strapiAxios = axios.create({baseURL: process.env.BACKAND_URL})

export default strapiAxios;
