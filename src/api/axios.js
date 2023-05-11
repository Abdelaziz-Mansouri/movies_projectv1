import axios from "axios";

export default axios.create({
    baseURL : 'https://192.168.1.11:5020/api'
})