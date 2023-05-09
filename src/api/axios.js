import axios from "axios";

export default axios.create({
    baseURL : 'https://192.168.1.15:5020/api'
})