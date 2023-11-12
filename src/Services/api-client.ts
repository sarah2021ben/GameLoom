import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'987c85f7c305423f9023823120f5ca05',
    }
})