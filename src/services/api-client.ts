import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ae156eb1791b4896b5d09af907a3d987'
    }
})