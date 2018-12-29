import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 10ea2cdbd79527cfa73d067457687648b05ededdf1d83244a0edefc115a5cc8f'
    }
})

