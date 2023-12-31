import paymentAxios from "./paymentAxios";
import strapiAxios from "./strapiAxios";
import instagramAxios from "./instagramAxios";

class Api {
    constructor($axios) {
        this.$axios = $axios
    }

    async get(endpoint) {
        return this.$axios.get(endpoint)
    }

    async post(endpoint, data) {
        return this.$axios.post(endpoint, {data})
    }
}

export const strapiApi = new Api(strapiAxios);
export const paymentApi = new Api(paymentAxios);
export const instagramApi = new Api(instagramAxios);
