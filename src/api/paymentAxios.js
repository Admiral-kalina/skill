import axios from "axios";

const paymentAxios = axios.create({baseURL:process.env.PAYMENT_BACKEND})

export default paymentAxios;