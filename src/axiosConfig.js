import axios from "axios";

export const matchingApi = axios.create({
    baseURL: 'http://localhost:3000/MOCK_DATA.json'
})

const axiosConfig = {
    matchingApi
}

export default axiosConfig;