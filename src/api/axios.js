import axios from "axios";

export default axios.create({
    baseURL : 'https://192.168.43.250:44354/api/Movies'
})