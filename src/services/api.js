import axios from 'axios'

export const api = axios.create({
    baseURL: "https://port-dev-back.onrender.com"
    //baseURL: "http://localhost:5000"
})