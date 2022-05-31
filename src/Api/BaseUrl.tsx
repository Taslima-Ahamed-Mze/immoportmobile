import axios, { AxiosRequestConfig } from "axios";


const customAxios = axios.create({
  baseURL: "http://api.immopport.cda.ve.manusien-ecolelamanu.fr/api/public/",
  timeout: 10000, //request aborted after 10s
  headers: {
    "Content-type": "application/json",
  },
});


export default customAxios;