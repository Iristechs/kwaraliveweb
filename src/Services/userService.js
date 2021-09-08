import http from "./httpServices";
import {apiUrl} from "../config.json";
const userprofile = apiUrl + "user";

export function userProfile(form){
    return http.post(userprofile + `/register`, form);
}