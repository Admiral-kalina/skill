import * as React from "react"
import {Home} from "../components/Home/Home";
import instagram from "../helpers/instagram";
import {useEffect, useState} from "react";
import axios from "axios";

const IndexPage = () => {
    const [data, setData] = useState()

    const get= async () => {
        const response = await axios.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&&access_token=IGQWRQWFFXQVc0ZA1lWeGZANSXoyaUFWVU5PSmd0U0J3Nlcwb2Y5OUh3em1IVlluVWoyTEdfSG5CekY5c2RmMTh1OVE2Yng3YlA2cGxfdWp3NV95aU03SWVLR29kaHV6NkhvbTJzYWNLRWd5dzhNMFJwb2NNdGRQeG8ZD')
        console.log('ogo',response)
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <main>

            <Home/>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
