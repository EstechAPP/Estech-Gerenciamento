import axios from "axios";

export const API = axios.create({
    baseURL: "http://services.estech.kinghost.net/"
})

export const APIViaCEP = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})


