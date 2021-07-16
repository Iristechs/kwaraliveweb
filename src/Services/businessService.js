import http from "./httpServices";
import {apiUrl} from "../config.json";
const userprofile = apiUrl + "business";

export function businessProfile(form){
    return http.post(userprofile + `/register`, form);
}