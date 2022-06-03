import axios from "axios";

const url = `http://umedia.travelticket.uz/api`

const request = {
    image: () => axios.get(`${url}/site/about/company`),
    service: () => axios.get(`${url}/site/services`)
}

export  default request;