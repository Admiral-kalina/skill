import axios from "axios";

let accessToken = 'AQBPJzBeBqLrzJL6tUuf3LX3LWXAlHDcH34lcbtoseCo_mIOlOC9P01tVzxb_KysUtO8roiZPmA56WQ-OSvr0LK8ZJj7vUiJwu2dgFaYJie1lV2WMXYgj98ydXKW2pPRbuH9zJRd7PMjlfuPH6wLHGVXPl9peyLzNB4IQz7wVv00_efmR598wWwMmFkn_Kw_1Ykbc-CyQpAi8_KG-jMVqj06eEEtNnt8qj46VuOo5WgE8w#_';

 const instagram = {
    getAccessToken() {
        if (accessToken) {
            return new Promise(resolve => resolve(accessToken));
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        if (accessTokenMatch) {
            accessToken = accessTokenMatch[1];
            return accessToken;
        } else {
            const Url ="https://graph.facebook.com/{graph-api-version}/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={your-access-token}"
                // `https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_CLIENT_ID}&redirect_uri=https://skilltostart.onrender.com/&scope=user_profile,user_media,instagram_graph_user_profile&response_type=code`
            window.location = Url;
        }
    },
    async display() {
        if (!accessToken) {
            console.log('ogo mayesh garnui hui');

            this.getAccessToken();
        }
        try {

            let response = await axios.get(`https://graph.instagram.com/1463215411162890?fields=id,username&access_token=${accessToken}`)

            console.log('ogo mayesh garnui hui',response);
            if (response.ok) {
                console.log('ogo mayesh garnui hui',response);
                console.log('ogo mayesh garnui hui');
                let jsonResponse = await response.json();
                let medias = jsonResponse.data.map(media => ({
                    id: media.id,
                    image: media.images.standard_resolution.url
                }));
                return medias;
            }
            throw new Error('Request failed!');
        } catch (error) {
            console.log(error);
        }
    }
}

export default instagram