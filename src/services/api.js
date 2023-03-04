import axios from "axios";

const api = axios.create ({
    baseURL: 'https://api.pexels.com/v1',
    headers: {'Authorization': 'YHzmxttZGhlCBIxR01wlvFyGszo9VaYjlhWq83DC3Y2J9jzHhT3IS4aS'}
})



export default api;