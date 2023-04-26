import axios from "axios";

export default axios.create({
    baseURL : 'http://192.168.1.48:5025/api/Movies'
})