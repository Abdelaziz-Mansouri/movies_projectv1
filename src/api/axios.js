import axios from "axios";

export default axios.create({
    baseURL : 'https://192.168.137.131:5025/api'
})